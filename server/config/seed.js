const db = require("./connection");
const { User, Category } = require("../models");

db.once("open", async () => {
  try {
    await Category.deleteMany();
    await User.deleteMany();

    console.log("Seeding categories...");
    const categories = await Category.insertMany([
      {
        name: "Back",
        workouts: [
          {
            name: "Back Extension",
            instructions:
              "Perform hyperextensions on a bench with ankles secured, cross arms in front of you, bend forward at the waist while keeping back flat, then return to starting position, avoiding rounding of the back.",
            image: "/images/back/back1.jpg",
          },
          {
            name: "Deadlift",
            instructions:
              "Stand on a platform or weight plates, grip the bar at shoulder width with hips and knees bent, drive through the heels to lift the bar while keeping the back arched and chest up, then lower it back down by bending at the hips.",
            image: "/images/back/back2.jpg",
          },
          {
            name: "Single Arm Lat Pulldown",
            instructions:
              "Stand facing the machine, grab the handle with an overhand grip slightly wider than shoulder-width apart, pull your shoulder down and back, exhale as you bring the handle towards your side using your back muscles, and inhale as you release it back to the starting position while maintaining tension on the lat muscles.",
            image: "/images/back/back3.jpg",
          },
        ],
      },
      {
        name: "Chest",
        workouts: [
          {
            name: "Dumbbell Flys",
            instructions:
              "Lie on a flat bench, lift dumbbells to shoulder width using thighs, lower them out to the sides in an arc while keeping elbows slightly bent, then return to starting position, maintaining stationary arms throughout the movement and squeezing chest muscles at the top.",
            image: "/images/chest/chest1.jpg",
          },
          {
            name: "Low Cable Crossovers",
            instructions:
              "Start by setting the pulleys at the low position, grasping a handle in each hand, step forward to gain tension, and with a slight bend in your arms, draw your hands upward and together in front of your chest, then return to the starting position.",
            image: "/images/chest/chest2.jpg",
          },
          {
            name: "Pushups",
            instructions:
              "Perform push-ups by lying face down, placing hands 36 inches apart and lifting torso at arm's length, lower yourself until chest nearly touches the floor, then press back up while squeezing your chest, and repeat for desired repetitions; variations include knee bending for reduced resistance, wall push-ups, or elevated feet for advanced lifters targeting the upper chest.",
            image: "/images/chest/chest3.jpg",
          },
        ],
      },
      {
        name: "Legs",
        workouts: [
          {
            name: "Barbell Hip Thrust",
            instructions:
              "Start seated on the ground with a bench behind you, place a loaded barbell over your legs, lean back against the bench with shoulder blades near the top, then drive through your feet to extend hips vertically through the bar and return to the starting position.",
            image: "/images/legs/legs1.jpg",
          },
          {
            name: "Single Leg Press",
            instructions:
              "Load sled with appropriate weight, sit on machine, place one foot on platform in line with your hip, maintain good spinal position, fully extend knee, unlock sled, lower weight by flexing hip and knee without involving lumbar, pause briefly at bottom, return to starting position by extending hip and knee; complete all reps on one leg before switching.",
            image: "/images/legs/legs2.jpg",
          },
          {
            name: "Squat",
            instructions:
              "Perform a barbell squat inside a squat rack, setting the bar just above shoulder level, lift the bar off the rack and step back with a shoulder-width stance and toes slightly pointed out, lower the bar by bending knees and sitting back with hips, then raise it back up by pushing through your heels to return to the starting position.",
            image: "/images/legs/legs3.jpg",
          },
        ],
      },
      {
        name: "Shoulders",
        workouts: [
          {
            name: "Bent Over Lateral Raises",
            instructions:
              "Grab the machine handle with an overhand grip, pull down towards your side while engaging back muscles, pause and squeeze, then release slowly to starting position while maintaining tension on the lats.",
            image: "/images/shoulders/shoulders1.jpg",
          },
          {
            name: "Front Raises",
            instructions:
              "Hold dumbbells in front of your thighs with palms facing your body, exhale and raise one arm forward until parallel to the ground or slightly higher, then inhale as you lower the dumbbell back to the starting position with controlled movements.",
            image: "/images/shoulders/shoulders2.jpg",
          },
          {
            name: "Shoulder Press",
            instructions:
              "Stand with feet shoulder-width apart, hold dumbbells at shoulder level with palms forward and elbows bent, exhale and press the dumbbells overhead, pausing briefly at the top, then inhale as you lower them back to the starting position with controlled movements.",
            image: "/images/shoulders/shoulders3.jpg",
          },
        ],
      },
      {
        name: "Arms",
        workouts: [
          {
            name: "Cable Push Down",
            instructions:
              "Stand upright, grip the V-Bar with an overhand grip at shoulder width, bring upper arms close to the body with forearms perpendicular to the floor, use triceps to bring the bar down until it touches the front of your thighs and arms are fully extended, then return to the starting position; various variations can be done using different attachments and grips.",
            image: "/images/arms/arms1.jpg",
          },
          {
            name: "Incline Hammer curl",
            instructions:
              "Stand upright with dumbbells held at arms length, palms facing torso, exhale and curl the weights forward, contracting the biceps until fully contracted at shoulder level, then inhale and slowly lower the dumbbells back to the starting position; variations include sitting on a bench with or without back support, and alternating arms for each repetition.",
            image: "/images/arms/arms2.png",
          },
          {
            name: "Skull Crusher",
            instructions:
              "Lie on the bench, hold the EZ bar with a close grip and elbows in, lower the bar by allowing the elbows to flex, pause when the bar is above the forehead, then lift it back to the starting position by extending the elbows; repeat.",
            image: "/images/arms/arms3.jpg",
          },
          {
            name: "Zottman curl",
            instructions:
              "Stand with torso upright, dumbbells in each hand at arms length, elbows close to torso, palms facing each other, curl the weights while contracting the biceps with forearms moving only, rotate wrists from supinated (palms up) to pronated (palms down) grip at the top, then return to starting position with neutral grip; repeat for recommended repetitions.",
            image: "/images/arms/arms4.png",
          },
        ],
      },
      {
        name: "Abs",
        workouts: [
          {
            name: "BottomsUp",
            instructions:
              "Lie on your back with straight legs and arms at your side, tuck knees towards chest by flexing hips and knees, extend legs above you to be perpendicular to the ground, rotate and elevate pelvis to raise glutes from the floor, then return to starting position.",
            image: "/images/abdominals/abs1.png",
          },
          {
            name: "Cocoons",
            instructions:
              "Lie on your back with legs straight, arms extended behind your head, tuck knees towards chest while lifting glutes off the floor, flex spine and bring arms back over your head in a crunch motion, then return to starting position.",
            image: "/images/abdominals/abs2.png",
          },
          {
            name: "Planks",
            instructions:
              "Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder. Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised.",
            image: "/images/abdominals/abs3.png",
          },
        ],
      },
    ]);

    console.log("categories and workouts seeded", categories);

    await User.deleteMany();

    console.log("users seeded");
    process.exit();
  } catch (error) {
    console.error("Error seeding data", error);
    process.exit(1);
  }
});
