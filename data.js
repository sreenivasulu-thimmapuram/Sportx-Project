const diseasesData = [
  {
    "disease": "Cold & Flu",
    "symptoms": ["Cough", "Sneezing", "Sore throat", "Runny nose", "Fever"],
    "nutrients_needed": ["Vitamin C", "Zinc", "Antioxidants", "Hydration"],
    "exercises_fitness": ["Light cardio", "Walking", "Breathing exercises"],
    "meditation_yoga_asanas": ["Bhramari Pranayama", "Shavasana"]
  },
  {
    "disease": "Diabetes",
    "symptoms": ["Increased thirst", "Frequent urination", "Fatigue", "Blurry vision"],
    "nutrients_needed": ["Chromium", "Magnesium", "Fiber", "Omega-3", "Low-Glycemic Foods"],
    "exercises_fitness": ["Strength training", "Aerobics", "Cycling", "Yoga"],
    "meditation_yoga_asanas": ["Kapalbhati Pranayama", "Dhanurasana", "Bhujangasana"]
  },
  {
    "disease": "Hypertension",
    "symptoms": ["Headaches", "Fatigue", "Dizziness", "Shortness of breath", "Chest pain"],
    "nutrients_needed": ["Potassium", "Magnesium", "Omega-3", "Reduced sodium", "Fiber"],
    "exercises_fitness": ["Walking", "Low-impact cardio", "Swimming"],
    "meditation_yoga_asanas": ["Anulom Vilom", "Sukhasana", "Vrikshasana"]
  },
  {
    "disease": "Depression",
    "symptoms": ["Sadness", "Fatigue", "Sleep disturbance", "Loss of interest", "Anxiety"],
    "nutrients_needed": ["Omega-3", "Vitamin D", "Folate", "Antioxidants", "Tryptophan"],
    "exercises_fitness": ["Walking", "Yoga", "Aerobic exercises", "Dancing"],
    "meditation_yoga_asanas": ["Meditation", "Balasana", "Savasana", "Viparita Karani"]
  },
  {
    "disease": "Arthritis",
    "symptoms": ["Joint pain", "Stiffness", "Swelling", "Reduced range of motion"],
    "nutrients_needed": ["Omega-3", "Vitamin D", "Calcium", "Antioxidants", "Collagen"],
    "exercises_fitness": ["Swimming", "Low-impact strength exercises", "Stretching"],
    "meditation_yoga_asanas": ["Virabhadrasana", "Trikonasana", "Tadasana"]
  },
  {
    "disease": "Asthma",
    "symptoms": ["Shortness of breath", "Wheezing", "Chest tightness", "Coughing"],
    "nutrients_needed": ["Magnesium", "Vitamin D", "Omega-3", "Antioxidants"],
    "exercises_fitness": ["Breathing exercises", "Walking", "Swimming", "Cycling"],
    "meditation_yoga_asanas": ["Bhastrika Pranayama", "Sukhasana", "Matsyasana"]
  },
  {
    "disease": "Anemia",
    "symptoms": ["Fatigue", "Dizziness", "Pale skin", "Shortness of breath", "Cold hands and feet"],
    "nutrients_needed": ["Iron", "Vitamin C", "Folate", "Vitamin B12", "Copper"],
    "exercises_fitness": ["Light exercise", "Walking", "Yoga", "Stretching"],
    "meditation_yoga_asanas": ["Pranayama", "Vajrasana", "Tadasana"]
  },
  {
    "disease": "Obesity",
    "symptoms": ["Excess body weight", "Joint pain", "Fatigue", "Shortness of breath"],
    "nutrients_needed": ["Fiber", "Protein", "Omega-3", "Whole grains", "Low-Glycemic Foods"],
    "exercises_fitness": ["Cardio", "Strength training", "Swimming", "HIIT"],
    "meditation_yoga_asanas": ["Surya Namaskar", "Bhujangasana", "Trikonasana"]
  },
  {
    "disease": "Insomnia",
    "symptoms": ["Difficulty sleeping", "Restlessness", "Daytime fatigue", "Irritability"],
    "nutrients_needed": ["Magnesium", "Melatonin-rich foods", "B6", "Calcium"],
    "exercises_fitness": ["Stretching", "Light yoga", "Breathing exercises"],
    "meditation_yoga_asanas": ["Savasana", "Yoga Nidra", "Viparita Karani"]
  },
  {
    "disease": "Osteoporosis",
    "symptoms": ["Bone weakness", "Back pain", "Height loss", "Fracture risk"],
    "nutrients_needed": ["Calcium", "Vitamin D", "Magnesium", "Protein", "Vitamin K"],
    "exercises_fitness": ["Weight-bearing exercises", "Strength training", "Walking"],
    "meditation_yoga_asanas": ["Tadasana", "Vrikshasana", "Setu Bandhasana"]
  },
  {
    "disease": "Heart Disease",
    "symptoms": ["Chest pain", "Shortness of breath", "Fatigue", "Swelling in legs"],
    "nutrients_needed": ["Omega-3", "Fiber", "Antioxidants", "Magnesium", "Potassium"],
    "exercises_fitness": ["Cardio", "Strength training", "Walking", "Swimming"],
    "meditation_yoga_asanas": ["Anulom Vilom", "Tadasana", "Bhujangasana"]
  },
  {
    "disease": "Chronic Fatigue Syndrome",
    "symptoms": ["Extreme tiredness", "Sleep problems", "Muscle pain", "Joint pain", "Memory problems"],
    "nutrients_needed": ["Magnesium", "Vitamin B12", "CoQ10", "Antioxidants", "Hydration"],
    "exercises_fitness": ["Gentle yoga", "Walking", "Stretching"],
    "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Balasana"]
  },
  {
    "disease": "Migraine",
    "symptoms": ["Severe headache", "Nausea", "Sensitivity to light", "Throbbing pain"],
    "nutrients_needed": ["Magnesium", "Riboflavin", "Omega-3", "Vitamin D", "CoQ10"],
    "exercises_fitness": ["Light cardio", "Walking", "Breathing exercises"],
    "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Balasana"]
  },
  {
    "disease": "Celiac Disease",
    "symptoms": ["Abdominal pain", "Bloating", "Diarrhea", "Weight loss", "Fatigue"],
    "nutrients_needed": ["Gluten-free foods", "Fiber", "Vitamin D", "Iron", "B12"],
    "exercises_fitness": ["Walking", "Yoga", "Swimming", "Strength training"],
    "meditation_yoga_asanas": ["Trikonasana", "Shavasana", "Matsyasana"]
  },
  {
    "disease": "Gout",
    "symptoms": ["Joint pain", "Swelling", "Redness", "Tenderness", "Heat"],
    "nutrients_needed": ["Low-purine foods", "Vitamin C", "Fiber", "Omega-3", "Water"],
    "exercises_fitness": ["Low-impact cardio", "Swimming", "Walking"],
    "meditation_yoga_asanas": ["Virabhadrasana", "Trikonasana", "Tadasana"]
  },
  {
    "disease": "Kidney Disease",
    "symptoms": ["Fatigue", "Swollen ankles", "Frequent urination", "Muscle cramps"],
    "nutrients_needed": ["Low-sodium foods", "Potassium", "Omega-3", "Calcium", "B-complex vitamins"],
    "exercises_fitness": ["Walking", "Cycling", "Low-impact strength training"],
    "meditation_yoga_asanas": ["Anulom Vilom", "Tadasana", "Setu Bandhasana"]
  },
  {
    "disease": "Liver Disease",
    "symptoms": ["Jaundice", "Fatigue", "Swelling in legs", "Abdominal pain", "Dark urine"],
    "nutrients_needed": ["Antioxidants", "Vitamin E", "Omega-3", "B12", "Folate"],
    "exercises_fitness": ["Walking", "Cycling", "Swimming"],
    "meditation_yoga_asanas": ["Bhujangasana", "Shavasana", "Pawanmuktasana"]
  },
  {
    "disease": "Thyroid Disorders",
    "symptoms": ["Fatigue", "Weight changes", "Hair loss", "Dry skin", "Mood changes"],
    "nutrients_needed": ["Iodine", "Selenium", "Zinc", "Vitamin D", "Omega-3"],
    "exercises_fitness": ["Yoga", "Walking", "Strength training"],
    "meditation_yoga_asanas": ["Setu Bandhasana", "Trikonasana", "Savasana"]
  },
  {
    "disease": "Psoriasis",
    "symptoms": ["Red patches", "Itching", "Dry skin", "Thickened nails"],
    "nutrients_needed": ["Omega-3", "Vitamin D", "Antioxidants", "Hydration"],
    "exercises_fitness": ["Walking", "Swimming", "Yoga"],
    "meditation_yoga_asanas": ["Savasana", "Vrikshasana", "Padmasana"]
  },
  {
    "disease": "Crohn's Disease",
    "symptoms": ["Abdominal pain", "Diarrhea", "Fatigue", "Weight loss", "Nutritional deficiencies"],
    "nutrients_needed": ["Fiber", "Vitamin B12", "Iron", "Folate"],
    "exercises_fitness": ["Walking", "Yoga", "Low-impact cardio"],
    "meditation_yoga_asanas": ["Matsyasana", "Balasana", "Savasana"]
  },
  {
    "disease": "HIV/AIDS",
    "symptoms": ["Fatigue", "Weight loss", "Fever", "Swollen lymph nodes"],
    "nutrients_needed": ["Protein", "Antioxidants", "Vitamins", "Minerals"],
    "exercises_fitness": ["Walking", "Yoga", "Strength training"],
    "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Bhujangasana"]
  },
  {
    "disease": "Pneumonia",
    "symptoms": ["Cough", "Fever", "Difficulty breathing", "Chest pain"],
    "nutrients_needed": ["Vitamin C", "Zinc", "Hydration", "Protein"],
    "exercises_fitness": ["Breathing exercises", "Walking"],
    "meditation_yoga_asanas": ["Bhramari Pranayama", "Savasana", "Ujjayi Pranayama"]
  },
  {
    "disease": "Tuberculosis",
    "symptoms": ["Cough", "Weight loss", "Night sweats", "Fever"],
    "nutrients_needed": ["Protein", "Vitamin D", "Zinc", "Iron"],
    "exercises_fitness": ["Gentle walking", "Breathing exercises"],
    "meditation_yoga_asanas": ["Savasana", "Bhramari Pranayama", "Anulom Vilom"]
  },
  {
    "disease": "Sepsis",
    "symptoms": ["Fever", "Confusion", "Difficulty breathing", "Increased heart rate"],
    "nutrients_needed": ["Hydration", "Electrolytes", "Vitamin C"],
    "exercises_fitness": ["Gentle stretching", "Walking"],
    "meditation_yoga_asanas": ["Savasana", "Shavasana", "Matsyasana"]
  },
  {
    "disease": "Bipolar Disorder",
    "symptoms": ["Mood swings", "Depression", "Mania", "Sleep disturbances"],
    "nutrients_needed": ["Omega-3", "Folate", "Vitamin D", "Magnesium"],
    "exercises_fitness": ["Yoga", "Walking", "Aerobics"],
    "meditation_yoga_asanas": ["Balasana", "Savasana", "Anulom Vilom"]
  },
  {
    "disease": "Schizophrenia",
    "symptoms": ["Delusions", "Hallucinations", "Disorganized thinking", "Lack of motivation"],
    "nutrients_needed": ["Omega-3", "Folate", "Zinc"],
    "exercises_fitness": ["Light cardio", "Walking"],
    "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Matsyasana"]
  },
  {
    "disease": "Obsessive-Compulsive Disorder",
    "symptoms": ["Intrusive thoughts", "Compulsions", "Anxiety", "Distress"],
    "nutrients_needed": ["Omega-3", "Magnesium", "Vitamin D"],
    "exercises_fitness": ["Walking", "Yoga"],
    "meditation_yoga_asanas": ["Savasana", "Matsyasana", "Anulom Vilom"]
  },
  {
    "disease": "Post-Traumatic Stress Disorder",
    "symptoms": ["Flashbacks", "Avoidance", "Anxiety", "Mood changes"],
    "nutrients_needed": ["Omega-3", "Magnesium", "Vitamin D"],
    "exercises_fitness": ["Yoga", "Walking", "Meditation"],
    "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Balasana"]
  },
  {
    "disease": "Generalized Anxiety Disorder",
    "symptoms": ["Excessive worry", "Restlessness", "Fatigue", "Sleep problems"],
    "nutrients_needed": ["Magnesium", "Vitamin D", "Omega-3"],
    "exercises_fitness": ["Yoga", "Walking", "Breathing exercises"],
    "meditation_yoga_asanas": ["Anulom Vilom", "Savasana", "Bhramari Pranayama"]
  },
  {
    "disease": "Attention-Deficit/Hyperactivity Disorder",
    "symptoms": ["Inattention", "Hyperactivity", "Impulsivity", "Difficulty focusing"],
    "nutrients_needed": ["Omega-3", "Zinc", "Magnesium"],
    "exercises_fitness": ["Yoga", "Walking", "Aerobics"],
    "meditation_yoga_asanas": ["Savasana", "Balasana", "Viparita Karani"]
  },
  {
    "disease": "Chronic Obstructive Pulmonary Disease",
    "symptoms": ["Breathlessness", "Chronic cough", "Fatigue", "Wheezing"],
    "nutrients_needed": ["Vitamin C", "Omega-3", "Antioxidants"],
    "exercises_fitness": ["Breathing exercises", "Walking", "Swimming"],
    "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Bhastrika"]
  },
  {
    "disease": "Multiple Sclerosis",
    "symptoms": ["Fatigue", "Numbness", "Difficulty walking", "Blurry vision"],
    "nutrients_needed": ["Vitamin D", "Omega-3", "B12"],
    "exercises_fitness": ["Gentle yoga", "Walking", "Swimming"],
    "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Balasana"]
  },
  {
    "disease": "Autism Spectrum Disorder",
    "symptoms": ["Social difficulties", "Repetitive behaviors", "Communication challenges"],
    "nutrients_needed": ["Omega-3", "Vitamin D", "Zinc"],
    "exercises_fitness": ["Swimming", "Yoga", "Walking"],
    "meditation_yoga_asanas": ["Savasana", "Balasana", "Anulom Vilom"]
  },
  {
    "disease": "Fibromyalgia",
    "symptoms": ["Widespread pain", "Fatigue", "Sleep problems", "Cognitive difficulties"],
    "nutrients_needed": ["Magnesium", "Vitamin D", "CoQ10"],
    "exercises_fitness": ["Gentle yoga", "Walking", "Stretching"],
    "meditation_yoga_asanas": ["Savasana", "Matsyasana", "Balasana"]
  },
  {
    "disease": "Acid Reflux",
    "symptoms": ["Heartburn", "Regurgitation", "Difficulty swallowing", "Chest pain"],
    "nutrients_needed": ["Ginger", "Fiber", "Probiotics"],
    "exercises_fitness": ["Gentle walking", "Yoga"],
    "meditation_yoga_asanas": ["Savasana", "Trikonasana", "Pawanmuktasana"]
  },
  {
    "disease": "Gallstones",
    "symptoms": ["Abdominal pain", "Nausea", "Indigestion"],
    "nutrients_needed": ["Fiber", "Healthy fats", "Vitamin C"],
    "exercises_fitness": ["Walking", "Yoga"],
    "meditation_yoga_asanas": ["Savasana", "Trikonasana", "Baddha Konasana"]
  },
  {
    "disease": "Diverticulitis",
    "symptoms": ["Abdominal pain", "Bloating", "Constipation", "Fever"],
    "nutrients_needed": ["Fiber", "Water", "Antioxidants"],
    "exercises_fitness": ["Gentle walking", "Yoga"],
    "meditation_yoga_asanas": ["Savasana", "Matsyasana", "Balasana"]
  },
  {
    "disease": "Acne",
    "symptoms": ["Pimples", "Blackheads", "Oily skin", "Inflammation"],
    "nutrients_needed": ["Zinc", "Omega-3", "Vitamin A", "Vitamin E"],
    "exercises_fitness": ["Cardio", "Yoga"],
    "meditation_yoga_asanas": ["Savasana", "Balasana", "Bhramari Pranayama"]
  },
  {
    "disease": "Eczema",
    "symptoms": ["Dry skin", "Itching", "Red patches", "Swelling"],
    "nutrients_needed": ["Omega-3", "Antioxidants", "Zinc"],
    "exercises_fitness": ["Gentle yoga", "Walking"],
    "meditation_yoga_asanas": ["Savasana", "Balasana", "Anulom Vilom"]
  },
  {
    "disease": "Psoriatic Arthritis",
    "symptoms": ["Joint pain", "Swelling", "Red patches on skin"],
    "nutrients_needed": ["Omega-3", "Vitamin D", "Calcium"],
    "exercises_fitness": ["Swimming", "Yoga"],
    "meditation_yoga_asanas": ["Virabhadrasana", "Trikonasana", "Tadasana"]
  },
  {
    "disease": "Lupus",
    "symptoms": ["Fatigue", "Joint pain", "Rashes", "Fever"],
    "nutrients_needed": ["Omega-3", "Vitamin D", "Antioxidants"],
    "exercises_fitness": ["Walking", "Yoga"],
    "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Balasana"]
  },
  {
    "disease": "Sarcoidosis",
    "symptoms": ["Fatigue", "Cough", "Weight loss", "Skin lesions"],
    "nutrients_needed": ["Vitamin D", "Omega-3", "Antioxidants"],
    "exercises_fitness": ["Walking", "Yoga"],
    "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Matsyasana"]
  },
  {
    "disease": "Chronic Sinusitis",
    "symptoms": ["Nasal congestion", "Facial pain", "Loss of smell"],
    "nutrients_needed": ["Vitamin C", "Antioxidants", "Zinc"],
    "exercises_fitness": ["Breathing exercises", "Walking"],
    "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Bhramari Pranayama"]
  },
  {
    "disease": "Dementia",
    "symptoms": ["Memory loss", "Difficulty communicating", "Changes in mood"],
    "nutrients_needed": ["Omega-3", "Antioxidants", "B vitamins"],
    "exercises_fitness": ["Walking", "Gentle yoga"],
    "meditation_yoga_asanas": ["Savasana", "Meditation", "Balasana"]
  },
  {
    "disease": "Alzheimer's Disease",
    "symptoms": ["Memory loss", "Disorientation", "Changes in mood"],
    "nutrients_needed": ["Omega-3", "Antioxidants", "B vitamins"],
    "exercises_fitness": ["Gentle walking", "Yoga"],
    "meditation_yoga_asanas": ["Savasana", "Balasana", "Meditation"]
  },
  {
    "disease": "Parkinson's Disease",
    "symptoms": ["Tremors", "Stiffness", "Slowed movement", "Balance problems"],
    "nutrients_needed": ["Antioxidants", "Omega-3", "CoQ10"],
    "exercises_fitness": ["Walking", "Tai Chi", "Yoga"],
    "meditation_yoga_asanas": ["Savasana", "Vrikshasana", "Tadasana"]
  },
  {
    "disease": "Cushing's Syndrome",
    "symptoms": ["Weight gain", "Mood changes", "Fatigue", "High blood pressure"],
    "nutrients_needed": ["Potassium", "Calcium", "Vitamin D"],
    "exercises_fitness": ["Gentle yoga", "Walking"],
    "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Balasana"]
  },
  {
    "disease": "Addison's Disease",
    "symptoms": ["Fatigue", "Weight loss", "Low blood pressure", "Skin changes"],
    "nutrients_needed": ["Sodium", "Potassium", "Vitamin D"],
    "exercises_fitness": ["Gentle yoga", "Walking"],
    "meditation_yoga_asanas": ["Savasana", "Balasana", "Anulom Vilom"]
  }
];
