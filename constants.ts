import type { Emotion } from './types';

export const EMOTIONS: Emotion[] = [
  // Positive Emotions
  { id: 1, name: '기쁘다', question: '최근에 있었던 일 중, 생각하면 나도 모르게 미소 짓게 되는 일이 있나요?', emoji: '😄', color: 'bg-green-300', imagePrompt: 'A field of sunflowers basking in the warm morning sun, with soft light rays filtering through.' },
  { id: 2, name: '설레다', question: '요즘 당신의 마음을 설레게 하는 것은 무엇인가요?', emoji: '💓', color: 'bg-pink-300', imagePrompt: 'Cherry blossom petals gently falling in a soft pink breeze, with a dreamy, bokeh background.' },
  { id: 3, name: '들뜨다', question: '마치 소풍가기 전날 밤처럼, 기분 좋게 들떴던 순간을 공유해주세요.', emoji: '🥳', color: 'bg-yellow-300', imagePrompt: 'Colorful hot air balloons floating in a clear blue sky at sunrise, viewed from below.' },
  { id: 4, name: '편안하다', question: '생각만 해도 마음이 편안해지는 나만의 장소나 시간이 있나요?', emoji: '😌', color: 'bg-sky-200', imagePrompt: 'A cozy armchair by a crackling fireplace in a rustic cabin, with a cup of steaming tea on a small table.' },
  { id: 5, name: '뿌듯하다', question: '최근 "이건 정말 내가 잘했다!"하고 스스로를 칭찬해준 일이 있나요?', emoji: '😎', color: 'bg-green-300', imagePrompt: 'A person standing on a mountain peak at sunrise, looking out over a sea of clouds.' },
  { id: 6, name: '활기차다', question: '오늘 아침, "오늘 컨디션 좋은데?"라고 느끼게 한 일이 있었나요?', emoji: '🔥', color: 'bg-yellow-300', imagePrompt: 'A vibrant abstract painting with dynamic splashes of orange, yellow, and red, conveying a sense of energy.' },
  { id: 7, name: '만족스럽다', question: '소소하지만 확실한 만족감을 느꼈던 최근의 순간은 언제인가요?', emoji: '😊', color: 'bg-green-300', imagePrompt: 'A perfectly ripe strawberry, glistening with a drop of dew, on a clean white background.' },
  { id: 8, name: '감사하다', question: '당연하게 생각했던 것들 중, 새삼 고맙게 느껴졌던 경험이 있나요?', emoji: '🙏', color: 'bg-sky-200', imagePrompt: 'Hands holding a simple, warm bowl of soup, with gentle light from a window.' },
  { id: 12, name: '기대하다', question: '곧 다가올 일 중에, 생각만 해도 기다려지는 일이 있나요?', emoji: '🤩', color: 'bg-yellow-300', imagePrompt: 'A closed gift box with a beautiful ribbon, glowing with a magical light from within.' },
  { id: 27, name: '행복하다', question: '"이게 행복이지" 라고 느꼈던, 소박하지만 완벽했던 순간을 공유해주세요.', emoji: '😇', color: 'bg-pink-300', imagePrompt: 'A path through a lush green forest with sunlight filtering through the canopy, creating a magical atmosphere.' },
  { id: 28, name: '홀가분하다', question: '오랫동안 신경 쓰던 일이 끝나고 마음이 홀가분해졌던 경험에 대해 이야기해주세요.', emoji: '🕊️', color: 'bg-sky-200', imagePrompt: 'A single white feather floating gently against a clear, pale blue sky.' },
  { id: 29, name: '흥분하다', question: '생각만해도 당신을 흥분하게 하는 신나는 일이 있나요? 부럽습니다! 함께 나눠주세요.', emoji: '🎢', color: 'bg-yellow-300', imagePrompt: 'Fireworks exploding in a night sky over a vibrant city skyline, reflected in the water below.' },
  { id: 30, name: '감동하다', question: '최근 영화나 책, 혹은 다른 사람의 이야기에서 마음이 뭉클해졌던 순간이 있다면 알려주세요.', emoji: '🥹', color: 'bg-pink-300', imagePrompt: 'A single teardrop rolling down a cheek, reflecting a beautiful, heartwarming scene.' },
  { id: 25, name: '뿌듯하다', question: '작은 것이라도 괜찮아요. 최근 무언가를 꾸준히 해서 얻은 성취가 있나요?', emoji: '🏆', color: 'bg-green-300', imagePrompt: 'A small, healthy sprout growing out of fertile soil, symbolizing growth and achievement.' },
  
  // Neutral Emotions
  { id: 9, name: '차분하다', question: '복잡했던 머릿속이 차분하게 정리되었던 순간에 대해 이야기해주세요.', emoji: '🧘', color: 'bg-gray-200', imagePrompt: 'A still, clear lake at dawn, perfectly reflecting the calm sky and surrounding mountains.' },
  { id: 10, name: '궁금하다', question: '최근에 "이건 왜 이렇지?"하고 궁금증이 생겼던 분야나 주제가 있나요?', emoji: '🤔', color: 'bg-gray-200', imagePrompt: 'An antique, ornate key lying next to a locked, mysterious wooden box.' },
  { id: 11, name: '심심하다', question: '아무것도 안하고 있지만, 동시에 무언가 재미있는 일을 하고 싶을 때 주로 뭘 하세요?', emoji: '😶', color: 'bg-gray-200', imagePrompt: 'A single, empty swing swaying gently in a quiet, deserted park on a gray day.' },
  { id: 23, name: '놀랍다', question: '예상치 못한 일로 깜짝 놀랐지만, 결과적으로는 즐거웠던 경험이 있나요?', emoji: '😮', color: 'bg-purple-200', imagePrompt: 'A geode cracked open to reveal a sparkling, crystalline interior of amethyst.' },
  { id: 24, name: '긴장된다', question: '중요한 일을 앞두고 긴장될 때, 어떤 방법으로 마음을 다스리나요?', emoji: '😰', color: 'bg-purple-200', imagePrompt: 'A tightrope walker carefully balancing on a rope high above the ground, with a focused expression.' },
  { id: 26, name: '당황하다', question: '갑작스러운 상황에 당황했지만, 나중에 생각하니 웃음이 났던 에피소드가 있나요?', emoji: '😅', color: 'bg-purple-200', imagePrompt: 'A person juggling too many items, with some comically suspended in mid-air just before they fall.' },

  // Negative Emotions
  { id: 13, name: '우울하다', question: '마음이 축 가라앉을 때, 나에게 가장 힘이 되어주는 것은 무엇인가요?', emoji: '😢', color: 'bg-blue-200', imagePrompt: 'Raindrops tracing paths down a windowpane on a gloomy, overcast day, with a blurred, gray cityscape outside.' },
  { id: 14, name: '지치다', question: '몸과 마음의 에너지가 방전되었을 때, 당신은 어떻게 충전하나요?', emoji: '🔋', color: 'bg-slate-300', imagePrompt: 'A candle that has just been extinguished, with a thin wisp of smoke rising from the wick.' },
  { id: 15, name: '불안하다', question: '마음이 불안할 때, 나를 다독여주는 나만의 방법이 있다면 알려주세요.', emoji: '😟', color: 'bg-blue-200', imagePrompt: 'A small boat tossed on restless, dark ocean waves under a stormy sky.' },
  { id: 16, name: '답답하다', question: '꽉 막힌 도로처럼 마음이 답답할 때, 어떻게 그 기분을 해소하시나요?', emoji: '😫', color: 'bg-purple-200', imagePrompt: 'A dense, thick fog obscuring a path through a dark forest.' },
  { id: 17, name: '초조하다', question: '무언가를 기다리며 초조했던 경험, 그리고 그 결과는 어땠나요?', emoji: '😥', color: 'bg-blue-200', imagePrompt: 'The hands of a clock blurred, as if time is moving too slowly or too quickly.' },
  { id: 18, name: '피곤하다', question: '"아, 정말 피곤하다" 느낄 때, 나에게 주는 작은 보상이 있나요?', emoji: '😴', color: 'bg-slate-300', imagePrompt: 'A winding road stretching to a distant, hazy horizon at dusk.' },
  { id: 19, name: '허전하다', question: '마음 한구석이 텅 빈 것처럼 느껴질 때, 그 공간을 무엇으로 채우고 싶나요?', emoji: '🌬️', color: 'bg-blue-200', imagePrompt: 'A single, bare tree in the middle of a vast, empty field in winter.' },
  { id: 20, name: '외롭다', question: '혼자라고 느껴질 때, 당신에게 힘이 되어주는 사람이나 사물이 있나요?', emoji: '👤', color: 'bg-blue-200', imagePrompt: 'A single lit window in a large, dark building at night.' },
  { id: 21, name: '속상하다', question: '속상했던 마음을 누군가에게 털어놓고 후련해졌던 경험이 있나요?', emoji: '😞', color: 'bg-purple-200', imagePrompt: 'A crumpled piece of paper lying on a dark wooden floor, with soft, dramatic lighting.' },
  { id: 22, name: '짜증나다', question: '사소한 일에 짜증이 났을 때, 어떻게 기분을 전환하시나요?', emoji: '😠', color: 'bg-purple-200', imagePrompt: 'A tangled mess of colorful wires and cables, representing a feeling of frustration.' },
];