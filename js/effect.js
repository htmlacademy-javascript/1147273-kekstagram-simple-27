const imagePreviewElement = document.querySelector('.img-upload__preview img');
const ulpoadFormElement = document.querySelector('.img-upload__form');
const sliderEffectElement = document.querySelector('.effect-level__slider');
const sliderEffectInnerElement = document.querySelector('.img-upload__effect-level');
const levelEffectElement = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100 ,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderEffectInnerElement.classList.remove('hidden');
  sliderEffectElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    sliderEffectInnerElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  imagePreviewElement.style.filter = 'none';
  imagePreviewElement.className = '';
  levelEffectElement.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderEffectElement.noUiSlider.get();
  imagePreviewElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imagePreviewElement.classList.add(`effects__preview--${chosenEffect.name}`);
  levelEffectElement.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderEffectElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();

ulpoadFormElement.addEventListener('change', onFormChange);
sliderEffectElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
