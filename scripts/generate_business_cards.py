from pathlib import Path
import io

from PIL import Image
import qrcode
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
TMP = ROOT / "tmp" / "pdfs"
OUT.mkdir(parents=True, exist_ok=True)
TMP.mkdir(parents=True, exist_ok=True)

MM = 72 / 25.4
W, H = 85 * MM, 55 * MM

INK = HexColor("#1A1410")
PAPER = HexColor("#F1E8D8")
PAPER_2 = HexColor("#E6DCC6")
ACCENT = HexColor("#D24322")
SAND = HexColor("#9D8B75")

FONT_BOLD = ROOT / "fonts" / "BricolageGrotesque_24pt_Condensed-Bold.ttf"
FONT_SEMI = ROOT / "fonts" / "BricolageGrotesque_24pt_Condensed-SemiBold.ttf"
FONT_LIGHT = ROOT / "fonts" / "BricolageGrotesque_24pt_Condensed-ExtraLight.ttf"
pdfmetrics.registerFont(TTFont("BricolageBold", str(FONT_BOLD)))
pdfmetrics.registerFont(TTFont("BricolageSemi", str(FONT_SEMI)))
pdfmetrics.registerFont(TTFont("BricolageLight", str(FONT_LIGHT)))


def mm(value):
    return value * MM


def background(c, color):
    c.setFillColor(color)
    c.rect(0, 0, W, H, stroke=0, fill=1)


def make_qr():
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=14,
        border=4,
    )
    qr.add_data("https://nextlvl.com.ar")
    qr.make(fit=True)
    img = qr.make_image(fill_color="#1A1410", back_color="#F1E8D8").convert("RGB")
    buf = io.BytesIO()
    img.save(buf, format="PNG", dpi=(600, 600))
    buf.seek(0)
    return ImageReader(buf)


QR = make_qr()
LOGO = ImageReader(str(ROOT / "assets" / "logo.png"))


def dark_logo():
    img = Image.open(ROOT / "assets" / "logo.png").convert("RGBA")
    pixels = img.load()
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            if a:
                # Preserve the official terracotta full stop; invert only the wordmark.
                if r > 150 and g < 110 and b < 90:
                    pixels[x, y] = (210, 67, 34, a)
                else:
                    pixels[x, y] = (241, 232, 216, a)
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return ImageReader(buf)


LOGO_DARK = dark_logo()


def draw_logo(c, dark=False, width_mm=59):
    width = mm(width_mm)
    height = width * 60 / 350
    c.drawImage(LOGO_DARK if dark else LOGO, (W - width) / 2, (H - height) / 2,
                width=width, height=height, mask="auto")


def front(c, variant):
    if variant == 2:
        background(c, PAPER)
        c.setFillColor(INK)
        c.roundRect(0, 0, W, H, mm(3.2), stroke=0, fill=1)
        draw_logo(c, dark=True, width_mm=58)
    else:
        background(c, PAPER if variant == 1 else PAPER_2)
        draw_logo(c, width_mm=60)
        if variant == 3:
            c.setStrokeColor(ACCENT)
            c.setLineWidth(mm(0.7))
            c.line(mm(8), mm(7), mm(20), mm(7))


def divider_and_qr(c, dark=False, large=False):
    c.setStrokeColor(SAND if dark else HexColor("#6B5F51"))
    c.setLineWidth(mm(0.28))
    divider_x = 58 if large else 60
    c.line(mm(divider_x), mm(8), mm(divider_x), mm(47))
    size = mm(21.5 if large else 18.5)
    x = 60.7 if large else 64.25
    y = 18.0 if large else 19.4
    c.drawImage(QR, mm(x), mm(y), width=size, height=size, mask="auto")


def label(c, text, x, y, color=SAND):
    c.setFillColor(color)
    c.setFont("BricolageSemi", 5.8)
    c.drawString(mm(x), mm(y), text.upper())


def contact_block(c, color=INK, muted=SAND, y=15):
    c.setFillColor(color)
    c.setFont("BricolageSemi", 7.2)
    c.drawString(mm(8), mm(y), "+54 9 3571 327923")
    c.drawString(mm(8), mm(y - 4.2), "nextlvl.ok@gmail.com")
    c.setFillColor(muted)
    c.setFont("BricolageSemi", 6.6)
    c.drawString(mm(8), mm(y - 8.4), "nextlvl.com.ar  /  @nextlvl.ok")


def back_1(c):
    background(c, PAPER)
    divider_and_qr(c)
    label(c, "Estudio de software / Córdoba", 8, 45)
    c.setFillColor(INK)
    c.setFont("BricolageBold", 16.5)
    c.drawString(mm(8), mm(35.5), "Desarrollo web")
    c.drawString(mm(8), mm(29.3), "a medida.")
    contact_block(c, y=16.2)
    label(c, "Conocé nuestro trabajo", 65.2, 15.4, ACCENT)


def back_2(c):
    background(c, PAPER)
    c.setFillColor(INK)
    c.roundRect(0, 0, W, H, mm(3.2), stroke=0, fill=1)
    divider_and_qr(c, dark=True, large=True)
    label(c, "Tenés un proyecto?", 8, 45, ACCENT)
    c.setFillColor(PAPER)
    c.setFont("BricolageBold", 18)
    c.drawString(mm(8), mm(35.2), "Escaneá y")
    c.drawString(mm(8), mm(28.4), "hablemos.")
    contact_block(c, color=PAPER, muted=SAND, y=15.5)
    label(c, "Abrí la cámara", 63.0, 14.6, PAPER)


def back_3(c):
    background(c, PAPER_2)
    divider_and_qr(c)
    label(c, "Diseño + desarrollo", 8, 45)
    c.setFillColor(INK)
    c.setFont("BricolageBold", 17)
    c.drawString(mm(8), mm(35.2), "Tu próximo nivel")
    c.setFillColor(ACCENT)
    c.drawString(mm(8), mm(28.8), "empieza acá.")
    contact_block(c, y=15.5)
    label(c, "nextlvl.com.ar", 66.4, 15.4, ACCENT)


BACKS = {1: back_1, 2: back_2, 3: back_3}


def generate_model(variant):
    path = OUT / f"tarjeta_nextlevel_modelo_{variant}.pdf"
    c = canvas.Canvas(str(path), pagesize=(W, H), pageCompression=1)
    c.setTitle(f"Tarjeta personal nextlevel. - Modelo {variant}")
    c.setAuthor("nextlevel.")
    front(c, variant)
    c.showPage()
    BACKS[variant](c)
    c.showPage()
    c.save()
    return path


def validate(paths):
    for path in paths:
        reader = PdfReader(str(path))
        assert len(reader.pages) == 2, path
        for page in reader.pages:
            width = float(page.mediabox.width) / MM
            height = float(page.mediabox.height) / MM
            assert abs(width - 85) < 0.01 and abs(height - 55) < 0.01, (path, width, height)


if __name__ == "__main__":
    paths = [generate_model(i) for i in (1, 2, 3)]
    validate(paths)
    for path in paths:
        print(path)
