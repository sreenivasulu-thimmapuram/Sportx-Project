const diseasesData = [
    {
      "disease": "Anxiety Disorders",
      "symptoms": ["Excessive worry", "Restlessness", "Fatigue", "Difficulty concentrating"],
      "nutrients_needed": ["Omega-3", "Magnesium", "Vitamin D", "B vitamins"],
      "exercises_fitness": ["Yoga", "Walking", "Aerobics"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Bhramari Pranayama"]
    },
    {
      "disease": "Depression",
      "symptoms": ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep disturbances"],
      "nutrients_needed": ["Omega-3", "Vitamin D", "Folate", "Antioxidants"],
      "exercises_fitness": ["Walking", "Yoga", "Strength training"],
      "meditation_yoga_asanas": ["Meditation", "Balasana", "Savasana"]
    },
    {
      "disease": "Bipolar Disorder",
      "symptoms": ["Mood swings", "Mania", "Depression", "Sleep disturbances"],
      "nutrients_needed": ["Omega-3", "Folate", "Vitamin D", "Magnesium"],
      "exercises_fitness": ["Yoga", "Aerobics", "Walking"],
      "meditation_yoga_asanas": ["Balasana", "Savasana", "Anulom Vilom"]
    },
    {
      "disease": "Schizophrenia",
      "symptoms": ["Delusions", "Hallucinations", "Disorganized thinking", "Social withdrawal"],
      "nutrients_needed": ["Omega-3", "Folate", "Zinc", "Antioxidants"],
      "exercises_fitness": ["Walking", "Light cardio", "Yoga"],
      "meditation_yoga_asanas": ["Savasana", "Matsyasana", "Viparita Karani"]
    },
    {
      "disease": "Obsessive-Compulsive Disorder",
      "symptoms": ["Intrusive thoughts", "Compulsions", "Anxiety", "Distress"],
      "nutrients_needed": ["Omega-3", "Magnesium", "Vitamin D"],
      "exercises_fitness": ["Yoga", "Walking", "Aerobics"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Matsyasana"]
    },
    {
      "disease": "Post-Traumatic Stress Disorder",
      "symptoms": ["Flashbacks", "Avoidance", "Anxiety", "Mood changes"],
      "nutrients_needed": ["Omega-3", "Magnesium", "Vitamin D"],
      "exercises_fitness": ["Yoga", "Walking", "Meditation"],
      "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Balasana"]
    },
    {
      "disease": "Attention-Deficit/Hyperactivity Disorder",
      "symptoms": ["Inattention", "Hyperactivity", "Impulsivity", "Difficulty focusing"],
      "nutrients_needed": ["Omega-3", "Zinc", "Iron", "Magnesium"],
      "exercises_fitness": ["Yoga", "Walking", "Aerobics"],
      "meditation_yoga_asanas": ["Savasana", "Balasana", "Anulom Vilom"]
    },
    {
      "disease": "Social Anxiety Disorder",
      "symptoms": ["Intense fear of social situations", "Avoidance", "Sweating", "Rapid heartbeat"],
      "nutrients_needed": ["Vitamin B6", "Magnesium", "Omega-3"],
      "exercises_fitness": ["Yoga", "Walking", "Swimming"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Bhramari Pranayama"]
    },
    {
      "disease": "Generalized Anxiety Disorder",
      "symptoms": ["Chronic worry", "Fatigue", "Difficulty concentrating", "Sleep disturbances"],
      "nutrients_needed": ["Omega-3", "Magnesium", "Vitamin D"],
      "exercises_fitness": ["Yoga", "Walking", "Meditation"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Bhramari Pranayama"]
    },
    {
      "disease": "Seasonal Affective Disorder",
      "symptoms": ["Depression during winter months", "Fatigue", "Social withdrawal", "Weight gain"],
      "nutrients_needed": ["Vitamin D", "Omega-3", "Folate"],
      "exercises_fitness": ["Walking", "Light cardio", "Yoga"],
      "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Meditation"]
    },
    {
      "disease": "Eating Disorders",
      "symptoms": ["Extreme focus on weight and food", "Distorted body image", "Malnutrition"],
      "nutrients_needed": ["Protein", "Omega-3", "B vitamins", "Magnesium"],
      "exercises_fitness": ["Gentle yoga", "Walking", "Pilates"],
      "meditation_yoga_asanas": ["Savasana", "Bhramari Pranayama", "Meditation"]
    },
    {
      "disease": "Dissociative Disorders",
      "symptoms": ["Memory loss", "Detachment from reality", "Identity disturbances"],
      "nutrients_needed": ["Omega-3", "Antioxidants", "B vitamins"],
      "exercises_fitness": ["Gentle yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Balasana"]
    },
    {
      "disease": "Personality Disorders",
      "symptoms": ["Extreme emotional responses", "Distorted thinking", "Relationship problems"],
      "nutrients_needed": ["Omega-3", "Magnesium", "Zinc"],
      "exercises_fitness": ["Yoga", "Walking", "Strength training"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Meditation"]
    },
    {
      "disease": "Phobias",
      "symptoms": ["Intense fear of specific objects or situations", "Avoidance behavior", "Panic attacks"],
      "nutrients_needed": ["Vitamin B complex", "Omega-3", "Magnesium"],
      "exercises_fitness": ["Walking", "Yoga", "Breathing exercises"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Bhramari Pranayama"]
    },
    {
      "disease": "Substance Use Disorders",
      "symptoms": ["Compulsive use of substances", "Tolerance", "Withdrawal symptoms"],
      "nutrients_needed": ["Magnesium", "B vitamins", "Omega-3"],
      "exercises_fitness": ["Yoga", "Walking", "Cardio"],
      "meditation_yoga_asanas": ["Savasana", "Matsyasana", "Anulom Vilom"]
    },
    {
      "disease": "Borderline Personality Disorder",
      "symptoms": ["Instability in relationships", "Self-image issues", "Impulsivity"],
      "nutrients_needed": ["Omega-3", "Vitamin D", "Folate"],
      "exercises_fitness": ["Walking", "Yoga", "Aerobics"],
      "meditation_yoga_asanas": ["Savasana", "Balasana", "Anulom Vilom"]
    },
    {
      "disease": "Narcissistic Personality Disorder",
      "symptoms": ["Grandiosity", "Need for admiration", "Lack of empathy"],
      "nutrients_needed": ["Omega-3", "Magnesium", "Vitamin D"],
      "exercises_fitness": ["Yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Matsyasana"]
    },
    {
      "disease": "Histrionic Personality Disorder",
      "symptoms": ["Attention-seeking behavior", "Excessive emotions", "Need for approval"],
      "nutrients_needed": ["Omega-3", "B vitamins", "Magnesium"],
      "exercises_fitness": ["Yoga", "Walking", "Meditation"],
      "meditation_yoga_asanas": ["Savasana", "Balasana", "Anulom Vilom"]
    },
    {
      "disease": "Avoidant Personality Disorder",
      "symptoms": ["Social withdrawal", "Fear of disapproval", "Feelings of inadequacy"],
      "nutrients_needed": ["Vitamin B complex", "Omega-3", "Magnesium"],
      "exercises_fitness": ["Walking", "Yoga", "Breathing exercises"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Meditation"]
    },
    {
      "disease": "Agoraphobia",
      "symptoms": ["Fear of situations where escape might be difficult", "Panic attacks"],
      "nutrients_needed": ["Magnesium", "Vitamin D", "Omega-3"],
      "exercises_fitness": ["Walking", "Yoga"],
      "meditation_yoga_asanas": ["Savasana", "Viparita Karani", "Anulom Vilom"]
    },
    {
      "disease": "Compulsive Hoarding Disorder",
      "symptoms": ["Difficulty discarding items", "Cluttered living spaces", "Distress"],
      "nutrients_needed": ["Vitamin B complex", "Omega-3", "Magnesium"],
      "exercises_fitness": ["Gentle yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Balasana", "Meditation"]
    },
    {
      "disease": "Impulsive Control Disorders",
      "symptoms": ["Failure to resist a temptation", "Engaging in harmful behaviors", "Disruptive behavior"],
      "nutrients_needed": ["Omega-3", "Vitamin D", "Magnesium"],
      "exercises_fitness": ["Walking", "Yoga", "Strength training"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Meditation"]
    },
    {
      "disease": "Panic Disorder",
      "symptoms": ["Recurring panic attacks", "Intense fear", "Physical symptoms"],
      "nutrients_needed": ["Vitamin B complex", "Omega-3", "Magnesium"],
      "exercises_fitness": ["Walking", "Yoga", "Breathing exercises"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Bhramari Pranayama"]
    },
    {
      "disease": "Adjustment Disorders",
      "symptoms": ["Difficulty adjusting to significant life changes", "Anxiety", "Depression"],
      "nutrients_needed": ["Omega-3", "Vitamin D", "B vitamins"],
      "exercises_fitness": ["Walking", "Yoga", "Meditation"],
      "meditation_yoga_asanas": ["Savasana", "Balasana", "Anulom Vilom"]
    },
    {
      "disease": "Somatic Symptom Disorder",
      "symptoms": ["Physical symptoms without a clear medical cause", "Anxiety about health"],
      "nutrients_needed": ["Vitamin B complex", "Magnesium", "Omega-3"],
      "exercises_fitness": ["Gentle yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Bhramari Pranayama"]
    },
    {
      "disease": "Illness Anxiety Disorder",
      "symptoms": ["Excessive worry about having a serious illness", "Misinterpretation of symptoms"],
      "nutrients_needed": ["Vitamin D", "Omega-3", "Magnesium"],
      "exercises_fitness": ["Walking", "Yoga"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Meditation"]
    },
    {
      "disease": "Sleep Disorders",
      "symptoms": ["Insomnia", "Sleep apnea", "Nightmares"],
      "nutrients_needed": ["Magnesium", "Melatonin-rich foods", "B vitamins"],
      "exercises_fitness": ["Gentle yoga", "Stretching"],
      "meditation_yoga_asanas": ["Savasana", "Yoga Nidra", "Bhramari Pranayama"]
    },
    {
      "disease": "Chronic Fatigue Syndrome",
      "symptoms": ["Persistent fatigue", "Sleep problems", "Cognitive difficulties"],
      "nutrients_needed": ["Vitamin D", "Omega-3", "Magnesium"],
      "exercises_fitness": ["Gentle yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Balasana"]
    },
    {
      "disease": "Dementia",
      "symptoms": ["Memory loss", "Difficulty communicating", "Personality changes"],
      "nutrients_needed": ["Omega-3", "Antioxidants", "B vitamins"],
      "exercises_fitness": ["Walking", "Light cardio"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Viparita Karani"]
    },
    {
      "disease": "Alzheimer's Disease",
      "symptoms": ["Memory loss", "Confusion", "Difficulty completing familiar tasks"],
      "nutrients_needed": ["Omega-3", "Vitamin E", "B vitamins"],
      "exercises_fitness": ["Walking", "Light stretching"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Balasana"]
    },
    {
      "disease": "Learning Disorders",
      "symptoms": ["Difficulty with reading, writing, or math", "Struggles in school"],
      "nutrients_needed": ["Omega-3", "B vitamins", "Iron"],
      "exercises_fitness": ["Yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Anulom Vilom", "Bhramari Pranayama"]
    },
    {
      "disease": "Tic Disorders",
      "symptoms": ["Sudden, rapid movements or sounds", "Tics"],
      "nutrients_needed": ["Magnesium", "Omega-3", "Zinc"],
      "exercises_fitness": ["Yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Balasana", "Meditation"]
    },
    {
      "disease": "Pervasive Developmental Disorders",
      "symptoms": ["Impairments in social interaction", "Communication challenges"],
      "nutrients_needed": ["Omega-3", "Antioxidants", "Zinc"],
      "exercises_fitness": ["Yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Balasana", "Meditation"]
    },
    {
      "disease": "Non-Suicidal Self-Injury",
      "symptoms": ["Deliberate harm to oneself without suicidal intent", "Emotional distress"],
      "nutrients_needed": ["Vitamin D", "Omega-3", "B vitamins"],
      "exercises_fitness": ["Yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Balasana"]
    },
    {
      "disease": "Paranoia",
      "symptoms": ["Intense fear or suspicion", "Distrust of others", "Social withdrawal"],
      "nutrients_needed": ["Omega-3", "Magnesium", "Vitamin D"],
      "exercises_fitness": ["Walking", "Yoga"],
      "meditation_yoga_asanas": ["Savasana", "Balasana", "Meditation"]
    },
    {
      "disease": "Psychosis",
      "symptoms": ["Loss of contact with reality", "Hallucinations", "Delusions"],
      "nutrients_needed": ["Omega-3", "Folate", "Zinc"],
      "exercises_fitness": ["Walking", "Gentle yoga"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Viparita Karani"]
    },
    {
      "disease": "Trauma",
      "symptoms": ["Flashbacks", "Avoidance", "Anxiety", "Mood swings"],
      "nutrients_needed": ["Vitamin D", "Omega-3", "Magnesium"],
      "exercises_fitness": ["Yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Anulom Vilom"]
    },
    {
      "disease": "Fetishistic Disorder",
      "symptoms": ["Intense sexual arousal from non-living objects", "Distress"],
      "nutrients_needed": ["Omega-3", "Magnesium", "Zinc"],
      "exercises_fitness": ["Yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Balasana"]
    },
    {
      "disease": "Kleptomania",
      "symptoms": ["Compulsive stealing", "Tension before stealing", "Guilt after stealing"],
      "nutrients_needed": ["Omega-3", "Vitamin D", "B vitamins"],
      "exercises_fitness": ["Walking", "Yoga"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Anulom Vilom"]
    },
    {
      "disease": "Intermittent Explosive Disorder",
      "symptoms": ["Recurrent aggressive outbursts", "Impulsivity", "Tension before outbursts"],
      "nutrients_needed": ["Omega-3", "Magnesium", "Vitamin D"],
      "exercises_fitness": ["Walking", "Yoga"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Bhramari Pranayama"]
    },
    {
      "disease": "Somatic Symptom Disorder",
      "symptoms": ["Excessive focus on physical symptoms", "Anxiety about health"],
      "nutrients_needed": ["Omega-3", "Magnesium", "B vitamins"],
      "exercises_fitness": ["Gentle yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Balasana"]
    },
    {
      "disease": "Body Dysmorphic Disorder",
      "symptoms": ["Preoccupation with perceived flaws in appearance", "Distress"],
      "nutrients_needed": ["Omega-3", "Zinc", "Magnesium"],
      "exercises_fitness": ["Walking", "Yoga"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Anulom Vilom"]
    },
    {
      "disease": "Enuresis",
      "symptoms": ["Involuntary urination", "Distress", "Sleep disruptions"],
      "nutrients_needed": ["Magnesium", "Vitamin D", "B vitamins"],
      "exercises_fitness": ["Walking", "Yoga"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Balasana"]
    },
    {
      "disease": "Encopresis",
      "symptoms": ["Involuntary defecation", "Distress", "Social withdrawal"],
      "nutrients_needed": ["Magnesium", "Vitamin D", "B vitamins"],
      "exercises_fitness": ["Walking", "Yoga"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Balasana"]
    },
    {
      "disease": "Sexual Dysfunctions",
      "symptoms": ["Erectile dysfunction", "Premature ejaculation", "Low libido"],
      "nutrients_needed": ["Zinc", "Magnesium", "Vitamin D"],
      "exercises_fitness": ["Yoga", "Walking"],
      "meditation_yoga_asanas": ["Savasana", "Meditation", "Bhramari Pranayama"]
    }
  ]
  