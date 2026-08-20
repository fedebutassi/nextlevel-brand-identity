const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const ease = value => 1 - Math.pow(1 - value, 3);
const reelRoot = document.getElementById('reel');

const chromeFor = (cinematic, index) => {
  const number = String(index + 1).padStart(2, '0');
  if (cinematic === 'editorial') return `<b class="editorial-number">${number}</b>`;
  if (cinematic === 'conversation') return `<div class="route"><i></i><span>${number}</span></div>`;
  if (cinematic === 'ownership') return `<span class="coordinates">NL / ${number} / OWN</span>`;
  if (cinematic === 'automation') return `<div class="status"><i></i> FLOW ${number}</div>`;
  if (cinematic === 'comparison') return `<div class="ab">A <i>/</i> B · ${number}</div>`;
  if (cinematic === 'filter') return `<div class="filter-status">SIGNAL / ${number}</div>`;
  if (cinematic === 'identity') return `<div class="identity-code">ORIGINAL / ${number}</div>`;
  if (cinematic === 'tempo') return `<div class="tempo-mark"><i></i><i></i><i></i><i></i><i></i><b>${number}</b></div>`;
  if (cinematic === 'discovery') return `<div class="search-index">RESULT / ${number}</div>`;
  if (cinematic === 'restraint') return `<div class="less-mark">LESS / ${number}</div>`;
  return `<span class="counter">${number} — 06</span>`;
};

const sceneMarkup = (reel, scene, index) => {
  const isFinal = index === reel.scenes.length - 1;
  return `<section class="scene scene-${index + 1} ${isFinal ? 'final' : ''}" data-start="${index * 3}" data-end="${(index + 1) * 3}" data-index="${index}">
    <img class="brand" src="../../../assets/logo.svg">
    ${chromeFor(reel.cinematic, index)}
    <div class="copy"><h1>${scene[0]}</h1><p>${scene[1]}</p>${isFinal ? `<div class="cta">${reel.cta}</div><small class="url">${reel.url}</small>` : ''}</div>
    <div class="art">${reel.art[index]}</div>
    <div class="progress"><i></i></div>
  </section>`;
};

const setTransition = (scene, cinematic, enter, exit, index) => {
  scene.style.opacity = Math.min(enter, exit);
  if (cinematic === 'landing') scene.style.clipPath = `inset(0 ${index % 2 ? 0 : (1 - enter) * 100}% 0 ${index % 2 ? (1 - enter) * 100 : 0}%)`;
  if (cinematic === 'editorial') scene.style.clipPath = `inset(${(1 - enter) * 50}% 0 ${(1 - enter) * 50}% 0)`;
  if (cinematic === 'conversation') scene.style.clipPath = `inset(${(1 - enter) * 100}% 0 0 0 round 0 0 42px 42px)`;
  if (cinematic === 'ownership') scene.style.clipPath = `circle(${enter * 150}% at ${index % 2 ? 78 : 22}% 55%)`;
  if (cinematic === 'automation') scene.style.clipPath = `polygon(0 0,${enter * 100}% 0,${Math.max(0, enter * 100 - 12)}% 100%,0 100%)`;
  if (cinematic === 'comparison') scene.style.clipPath = `inset(0 ${(1 - enter) * 50}% 0 ${(1 - enter) * 50}%)`;
  if (cinematic === 'filter') scene.style.clipPath = `polygon(0 ${50 - enter * 50}%,100% ${30 - enter * 30}%,100% ${70 + enter * 30}%,0 ${50 + enter * 50}%)`;
  if (cinematic === 'identity') scene.style.transform = `scale(${1.16 - enter * 0.16}) rotate(${(1 - enter) * (index % 2 ? 1.5 : -1.5)}deg)`;
  if (cinematic === 'tempo') scene.style.clipPath = `inset(0 ${(1 - Math.ceil(enter * 6) / 6) * 100}% 0 0)`;
  if (cinematic === 'discovery') {
    scene.style.filter = `blur(${(1 - enter) * 22}px)`;
    scene.style.transform = `translateY(${(1 - enter) * 150}px) scale(${1.08 - enter * 0.08})`;
  }
  if (cinematic === 'restraint') scene.style.transform = `scale(${0.76 + enter * 0.24})`;
};

const animateArt = (scene, cinematic, local, progress) => {
  const children = scene.querySelectorAll('.art > div > *, .art > div > section');
  children.forEach((child, index) => {
    const stagger = ease(clamp((local - 0.12 - index * 0.1) / 0.65));
    if (cinematic === 'landing') child.style.transform = `translateX(${(1 - stagger) * (index % 2 ? 110 : -110)}px)`;
    if (cinematic === 'editorial') child.style.transform = `translateY(${(1 - stagger) * 90}px) rotate(${(1 - stagger) * (index % 2 ? 2 : -2)}deg)`;
    if (cinematic === 'conversation') child.style.transform = `translateY(${(1 - stagger) * 70}px) scale(${0.92 + stagger * 0.08})`;
    if (cinematic === 'ownership') child.style.transform = `rotate(${(1 - stagger) * (index % 2 ? 5 : -5)}deg) scale(${0.82 + stagger * 0.18})`;
    if (cinematic === 'automation') child.style.transform = `translateX(${(1 - stagger) * -130}px) scale(${0.9 + stagger * 0.1})`;
    if (cinematic === 'comparison') child.style.transform = `translateX(${(1 - stagger) * (index % 2 ? 130 : -130)}px)`;
    if (cinematic === 'filter') child.style.transform = `translateY(${(1 - stagger) * (index % 2 ? 95 : -95)}px) rotate(${(1 - stagger) * (index % 2 ? 3 : -3)}deg)`;
    if (cinematic === 'identity') child.style.transform = `scaleX(${0.72 + stagger * 0.28}) translateX(${(1 - stagger) * (index % 2 ? 80 : -80)}px)`;
    if (cinematic === 'tempo') child.style.transform = `translateX(${(1 - stagger) * 100}px)`;
    if (cinematic === 'discovery') child.style.transform = `translateY(${(1 - stagger) * 110}px) scale(${0.94 + stagger * 0.06})`;
    if (cinematic === 'restraint') child.style.transform = `scale(${0.68 + stagger * 0.32}) translate(${(1 - stagger) * (index % 2 ? 60 : -60)}px,${(1 - stagger) * 45}px)`;
    child.style.opacity = stagger;
  });
  scene.style.setProperty('--scene-progress', progress);
  scene.style.setProperty('--pulse', 1 + Math.sin(local * 5) * 0.05);
};

window.setReel = reel => {
  reelRoot.className = `cinematic-${reel.cinematic}`;
  reelRoot.innerHTML = reel.scenes.map((scene, index) => sceneMarkup(reel, scene, index)).join('');
  window.renderAt(0);
};

window.renderAt = milliseconds => {
  const time = milliseconds / 1000;
  document.querySelectorAll('.scene').forEach(scene => {
    const start = Number(scene.dataset.start);
    const end = Number(scene.dataset.end);
    const index = Number(scene.dataset.index);
    const local = time - start;
    const enter = ease(clamp(local / 0.55));
    const exit = end === 18 ? 1 : ease(clamp((end - time) / 0.28));
    const progress = clamp(local / (end - start));
    const cinematic = reelRoot.className.replace('cinematic-', '');
    setTransition(scene, cinematic, enter, exit, index);
    scene.style.zIndex = time >= start && time < end ? 2 : 1;
    const copy = scene.querySelector('.copy');
    const direction = cinematic === 'editorial' ? -1 : index % 2 ? 1 : -1;
    copy.style.transform = `translate(${direction * (1 - enter) * 85}px,${(1 - enter) * 45}px) scale(${0.94 + enter * 0.06})`;
    scene.querySelector('.progress i').style.width = `${progress * 100}%`;
    animateArt(scene, cinematic, local, progress);
  });
};
