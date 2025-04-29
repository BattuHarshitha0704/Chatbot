// Types for response categories and matching
type ResponseCategory = {
  patterns: string[];
  response: string;
};

const greetings: ResponseCategory = {
  patterns: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy'],
  response: "Hi! I'm here to assist you with workouts, diet tips, calories, motivation, and more. How can I help you today?"
};

const categories: ResponseCategory[] = [
  // Fitness Queries
  {
    patterns: ['hiit', 'high intensity', 'interval training'],
    response: 'HIIT stands for High-Intensity Interval Training. It involves short bursts of intense exercise followed by brief periods of rest. It\'s a great way to burn fat and improve fitness quickly.'
  },
  {
    patterns: ['compound exercises', 'compound movements', 'multi joint exercises'],
    response: 'Compound exercises are movements that work multiple muscle groups at once. Examples include squats, deadlifts, and bench presses.'
  },
  {
    patterns: ['how long workout', 'workout duration', 'exercise time', 'workout time'],
    response: 'For general fitness, 30-60 minutes of exercise per day is great. If you\'re aiming for specific goals like weight loss or muscle gain, you might need to adjust the time and intensity.'
  },
  {
    patterns: ['belly fat', 'lose belly', 'stomach fat', 'gut fat'],
    response: 'There\'s no way to spot-reduce fat, but exercises like running, cycling, and strength training can help you lose overall body fat, including belly fat.'
  },
  {
    patterns: ['cardio or weights', 'cardio vs weights', 'better for weight loss'],
    response: 'Both are important! Cardio helps you burn calories, while weightlifting builds muscle, which increases your metabolism. A combination of both is ideal for weight loss.'
  },
  {
    patterns: ['flexibility', 'become flexible', 'improve flexibility', 'stretching'],
    response: 'Stretching regularly, yoga, and Pilates are great ways to improve flexibility. Try to stretch at least 2-3 times a week.'
  },
  {
    patterns: ['avoid injury', 'prevent injury', 'safe workout', 'workout safety'],
    response: 'To avoid injuries, always warm up before exercise, use proper form, and don\'t push yourself too hard. Gradually increase your intensity and take rest days.'
  },
  // Diet Queries
  {
    patterns: ['balanced diet', 'healthy diet', 'what to eat'],
    response: 'A balanced diet includes a variety of foods: proteins (chicken, fish, tofu), carbohydrates (rice, potatoes, bread), healthy fats (avocado, nuts), and plenty of vegetables and fruits.'
  },
  {
    patterns: ['protein intake', 'how much protein', 'protein amount'],
    response: 'A general guideline is to consume about 1.2 to 2.0 grams of protein per kilogram of body weight, especially if you\'re exercising regularly or aiming to build muscle.'
  },
  {
    patterns: ['low calorie snacks', 'healthy snacks', 'diet snacks'],
    response: 'Low-calorie snacks include fruits like apple slices, carrot sticks, yogurt, or air-popped popcorn. They\'re filling but won\'t break your calorie budget.'
  },
  // Mental Health Queries
  {
    patterns: ['manage stress', 'stress relief', 'reduce stress'],
    response: 'Stress can be managed through relaxation techniques like deep breathing, meditation, or yoga. Regular exercise, enough sleep, and a balanced diet can also help reduce stress levels.'
  },
  {
    patterns: ['motivation', 'stay motivated', 'keep motivated', 'losing motivation'],
    response: 'To boost motivation, set small and achievable goals, create a routine, and track your progress. Surround yourself with supportive people, and remember to reward yourself for reaching milestones.'
  },
  {
    patterns: ['anxiety', 'deal with anxiety', 'feeling anxious'],
    response: 'Breathing exercises, mindfulness, and meditation can help manage anxiety. Regular physical activity and getting enough rest are also important. If anxiety is persistent, it\'s always helpful to speak to a mental health professional.'
  },
  {
    patterns: ['sleep better', 'improve sleep', 'sleeping tips', 'insomnia'],
    response: 'Create a relaxing bedtime routine, avoid caffeine late in the day, and try to go to bed and wake up at the same time every day. Make your bedroom a calm, quiet space for sleeping.'
  },
  // General Wellness
  {
    patterns: ['water intake', 'how much water', 'stay hydrated'],
    response: 'A common recommendation is to drink 8 cups (64 oz) of water per day. However, you may need more if you\'re active or live in a hot climate.'
  },
  {
    patterns: ['work life balance', 'balance life', 'lifestyle balance'],
    response: 'Set clear boundaries between work and personal time. Prioritize self-care, take breaks, and make time for activities you enjoy. It\'s important to disconnect from work when you\'re not working to maintain a healthy balance.'
  }
];

export function getStaticResponse(input: string): string {
  // Convert input to lowercase for matching
  const normalizedInput = input.toLowerCase().trim();
  
  // Check for greetings first
  if (greetings.patterns.some(pattern => normalizedInput.includes(pattern))) {
    return greetings.response;
  }
  
  // Check each category for matches
  for (const category of categories) {
    if (category.patterns.some(pattern => normalizedInput.includes(pattern))) {
      return category.response;
    }
  }

  // Default response if no match is found
  return "Sorry, I didn't understand that. Could you rephrase? You can ask me about workouts, diet, calories, motivation, or specific fitness goals.";
}