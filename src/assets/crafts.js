
 export const logos = {
   heartIcon: '/heart.svg'
 };

 export const craftsData = {
    1: {
      title: 'Mini Yarn Octopus Keychain 🐙',
      image: 'https://i.pinimg.com/1200x/7d/3f/d1/7d3fd17959ee10167a60b1599600cdda.jpg',
      materials: ['Yarn (any color)', 'Scissors', 'Small beads or googly eyes', 'Glue', 'Keychain ring'],
      difficulty: 'Easy',
      time: '15-20 minutes',
      steps: [
        'Cut about 20-25 strands of yarn, each 6 inches long.',
        'Gather all strands together and tie a knot at one end, leaving about 1 inch for the head.',
        'Divide the loose strands into 8 groups for tentacles.',
        'Braid or twist each group down to create tentacles.',
        'Tie small knots at the end of each tentacle.',
        'Glue on beads or googly eyes for the face.',
        'Attach a keychain ring to the top knot.',
        'Your mini octopus is ready!'
      ],
      description: 'Twist leftover yarn into a tiny octopus body, knot for tentacles, and glue on eyes. Makes a cute keychain or bag charm — fast, colorful, and beginner-friendly.',
      tips: 'Use multiple yarn colors for a rainbow effect. Trim tentacles to equal length for a neat look.'
    },
    2: {
      title: 'Plastic Bottle Flower Vase 🌸',
      image: 'https://i.pinimg.com/736x/1a/fb/00/1afb00c4eddf5ac1b0031ac8f9a69f41.jpg',
      materials: ['Plastic bottle', 'Acrylic paint', 'Paintbrush', 'Yarn', 'Scissors', 'Hot glue gun (optional)'],
      difficulty: 'Easy',
      time: '30-40 minutes',
      steps: [
        'Clean and dry the plastic bottle thoroughly.',
        'Cut off the top third of the bottle using scissors.',
        'Paint the base in ombré shades or create abstract dot patterns.',
        'Let the paint dry completely (about 15-20 minutes).',
        'Wrap yarn around the neck section of the bottle.',
        'Secure yarn ends with glue if needed.',
        'Add a second coat of paint if desired for opacity.',
        'Fill with water and add fresh or dried flowers!'
      ],
      description: 'Cut the bottle top off, paint the base in ombré shades or abstract dots. Wrap the neck with crocheted yarn for a cozy texture. Perfect table piece or gift!',
      tips: 'Sand the bottle lightly before painting for better adhesion. Use complementary colors for yarn and paint.'
    },
    3: {
      title: 'Origami Message Cranes in a Jar 🕊️',
      image: 'https://i.pinimg.com/1200x/57/57/a7/5757a7b470cc80f77e017783b26cded6.jpg',
      materials: ['Waste paper (newspapers, old notes)', 'Scissors', 'Pen or marker', 'Clear glass jar or bottle', 'Ribbon (optional)'],
      difficulty: 'Intermediate',
      time: '45-60 minutes',
      steps: [
        'Cut waste paper into small squares (3x3 inches works well).',
        'Write tiny messages, wishes, or memories on the paper.',
        'Fold each paper into an origami crane following traditional steps.',
        'Start with a square, fold diagonally both ways to create creases.',
        'Fold into a smaller square, then create the crane shape.',
        'Gently pull the wings apart and shape the head.',
        'Drop each finished crane into your jar.',
        'Fill the jar with 10-20 cranes for a full effect.',
        'Tie a ribbon around the jar neck for decoration.'
      ],
      description: 'Fold waste paper into small cranes or hearts, write tiny notes inside before folding. Drop them into a bottle or clear jar — an "art-in-a-bottle" memory piece.',
      tips: 'Use colorful newspaper comics or magazine pages for variety. Make this a group activity with friends!'
    }
  };

export const crafts = Object.entries(craftsData).map(([id, craft]) => ({
  id: Number(id),
  title: craft.title,
  description: craft.description,
  image: craft.image,
}));

