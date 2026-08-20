import { Film, Wand2, Image as ImageIcon, Video, Scissors, DollarSign } from "lucide-react";

export const MODULES = [
  { id: 1, title: "Introduction to AI Content Creation", icon: Film, free: true, minutes: 32 },
  { id: 2, title: "AI Prompting", icon: Wand2, free: true, minutes: 48 },
  { id: 3, title: "AI Image Creation", icon: ImageIcon, free: true, minutes: 55 },
  { id: 4, title: "AI Image-to-Video Creation", icon: Video, free: true, minutes: 61 },
  { id: 5, title: "AI Video Editing", icon: Scissors, free: true, minutes: 70 },
  { id: 6, title: "Monetizing AI Video Creation", icon: DollarSign, free: true, minutes: 40 },
];

export const LESSON_CONTENT = {
  1: {
    lessons: [
      {
        title: "Lesson 1: What Is AI Content Creation?",
        blocks: [
          { t: "h", c: "Introduction" },
          { t: "p", c: "Artificial Intelligence has changed the way content can be created. Tasks that once required expensive equipment, large teams, or advanced technical skills can now be assisted by AI tools." },
          { t: "p", c: "AI content creation is the process of using artificial intelligence tools to help create digital content. AI can assist with different parts of the creative process, including:" },
          { t: "list", c: ["Writing scripts and stories", "Generating images", "Creating characters", "Generating videos", "Creating voiceovers", "Producing music and sound effects", "Editing videos", "Creating advertisements", "Developing social media content"] },
          { t: "p", c: "For this course, our focus will be on using these technologies to create AI-powered videos and movies." },
          { t: "h", c: "Is AI the Creator?" },
          { t: "p", c: "Not exactly. AI is a creative tool, while you remain the creator. For example, you might have an idea for a movie about a young girl who discovers a mysterious door. AI can help you turn that idea into:" },
          { t: "list", c: ["A written story", "Character designs", "Movie scenes", "Animated clips", "Character voices", "Background music"] },
          { t: "p", c: "But you decide what the story is, what the characters look like, what happens in each scene, and how the final movie should feel." },
          { t: "h", c: "Why Is AI Content Creation Important?" },
          { t: "p", c: "AI can make content creation more accessible. You don't necessarily need:" },
          { t: "list", c: ["An expensive camera", "A film studio", "A large production team", "Professional actors", "Advanced animation skills"] },
          { t: "p", c: "You can begin with an idea, a device, an internet connection and the right AI tools." },
          { t: "h", c: "Key Takeaway" },
          { t: "p", c: "AI doesn't replace your creativity. It gives your creativity more ways to become reality." }
        ]
      },
      {
        title: "Lesson 2: What Can You Create With AI?",
        blocks: [
          { t: "p", c: "AI can be used for many different types of digital content. Understanding these possibilities will help you see how powerful the technology can be." },
          { t: "h", c: "1. AI Movies" },
          { t: "p", c: "AI can assist you in creating cinematic stories such as:" },
          { t: "list", c: ["Short films", "Fantasy stories", "Drama", "Romance", "Mystery", "Horror", "Animation", "Adventure", "Storytelling videos"] },
          { t: "p", c: "You can create individual scenes and eventually combine them into a complete movie." },
          { t: "h", c: "2. Social Media Content" },
          { t: "list", c: ["TikTok videos", "Instagram Reels", "YouTube Shorts", "Faceless videos", "Storytelling content", "Educational videos"] },
          { t: "h", c: "3. Business Content" },
          { t: "list", c: ["Product advertisements", "Brand promotional videos", "Social media advertisements", "Product demonstrations", "Marketing campaigns", "UGC-style content"] },
          { t: "p", c: "For example, a fashion brand could use AI to create a cinematic promotional concept without filming an entire physical production." },
          { t: "h", c: "4. Creative Content" },
          { t: "list", c: ["Fictional characters", "Fashion concepts", "Music videos", "Visual stories", "Concept art", "Fantasy worlds", "Animated scenes"] },
          { t: "h", c: "Important Reminder" },
          { t: "p", c: "Although AI can generate content quickly, good content still requires human creativity and direction. The goal isn't to create something simply because AI can create it. The goal is to use AI to create something intentional, interesting and valuable." },
          { t: "h", c: "Key Takeaway" },
          { t: "p", c: "AI gives creators more possibilities, but the creator still needs to provide the vision." }
        ]
      },
      {
        title: "Lesson 3: How AI Movie Creation Works",
        blocks: [
          { t: "p", c: "Before creating your first AI movie, you need to understand the complete production process." },
          { t: "h", c: "1. IDEA" },
          { t: "p", c: "Every movie starts with an idea. You decide:" },
          { t: "list", c: ["What is the story?", "Who is the main character?", "Where does the story happen?", "What problem does the character face?", "What should the audience feel?"] },
          { t: "h", c: "2. SCRIPT" },
          { t: "p", c: "Your idea is developed into a story or script. The script can include:" },
          { t: "list", c: ["Dialogue", "Narration", "Character actions", "Scene descriptions", "Story progression"] },
          { t: "p", c: "AI writing tools can assist you with developing these elements." },
          { t: "h", c: "3. PROMPTS" },
          { t: "p", c: "You then communicate your creative instructions to AI through prompts. A prompt tells an AI tool what you want it to create." },
          { t: "ex", c: "A young woman standing alone in an abandoned mansion at night, cinematic lighting, mysterious atmosphere." },
          { t: "p", c: "The quality and clarity of your instructions can greatly affect the result. You will learn prompting in detail in Module 2." },
          { t: "h", c: "4. IMAGE CREATION" },
          { t: "p", c: "You can generate images for your movie, including:" },
          { t: "list", c: ["Characters", "Locations", "Props", "Backgrounds", "Individual scenes"] },
          { t: "p", c: "These images can become the visual foundation of your movie." },
          { t: "h", c: "5. IMAGE-TO-VIDEO" },
          { t: "p", c: "Static images can then be transformed into moving video clips using AI video-generation tools. For example, an image of a woman standing in a forest could be animated so that:" },
          { t: "list", c: ["Her hair moves in the wind", "She walks forward", "The camera slowly moves", "Leaves fall around her"] },
          { t: "p", c: "This creates the feeling of a movie scene." },
          { t: "h", c: "6. VOICE & AUDIO" },
          { t: "p", c: "Your movie may also need:" },
          { t: "list", c: ["Character dialogue", "Narration", "Background music", "Sound effects", "Environmental sounds"] },
          { t: "h", c: "7. VIDEO EDITING" },
          { t: "p", c: "The individual clips are then brought together using a video editor. You can:" },
          { t: "list", c: ["Arrange scenes", "Trim clips", "Add transitions", "Add subtitles", "Add music", "Adjust timing", "Add sound effects", "Add visual effects"] },
          { t: "h", c: "8. FINAL MOVIE" },
          { t: "p", c: "Finally, all the elements come together: Story + Images + Animation + Voice + Sound + Editing = AI Movie" },
          { t: "h", c: "Key Takeaway" },
          { t: "p", c: "Remember this workflow: IDEA -> SCRIPT -> PROMPT -> IMAGE -> VIDEO -> AUDIO -> EDIT -> FINAL MOVIE" }
        ]
      },
      {
        title: "Lesson 4: Understanding AI Tools",
        blocks: [
          { t: "p", c: "There are many AI tools available, and each tool may have a different purpose. One of the biggest mistakes beginners make is thinking they need to master every AI tool. You don't." },
          { t: "p", c: "You need to understand what each type of tool does and choose the tools that fit your workflow." },
          { t: "h", c: "AI Writing Tools" },
          { t: "list", c: ["Brainstorming ideas", "Writing stories", "Creating scripts", "Developing characters", "Creating prompts"] },
          { t: "h", c: "AI Image Tools" },
          { t: "list", c: ["Characters", "Locations", "Objects", "Movie scenes", "Concept images"] },
          { t: "h", c: "AI Video Tools" },
          { t: "list", c: ["Image-to-video", "Text-to-video", "Character animation", "Camera movement", "Cinematic scenes"] },
          { t: "h", c: "AI Voice Tools" },
          { t: "list", c: ["Character voices", "Narration", "Voiceovers", "Different speaking styles"] },
          { t: "h", c: "Video Editing Tools" },
          { t: "list", c: ["Combine clips", "Add audio", "Add text", "Add effects", "Control timing", "Export your final video"] },
          { t: "h", c: "The Important Principle" },
          { t: "p", c: "Don't focus on collecting hundreds of AI tools. Focus on learning how to use the right tool for the right job." },
          { t: "h", c: "Key Takeaway" },
          { t: "p", c: "You don't need every AI tool. You need the right tools for your creative workflow." }
        ]
      },
      {
        title: "Lesson 5: What You Need to Get Started",
        blocks: [
          { t: "p", c: "One of the biggest misconceptions about AI movie creation is that you need expensive equipment. As a beginner, you can start with relatively simple resources." },
          { t: "h", c: "1. A Device" },
          { t: "list", c: ["Smartphone", "Tablet", "Laptop", "Desktop computer"] },
          { t: "p", c: "Your available device may affect which tools you can comfortably use." },
          { t: "h", c: "2. Internet Connection" },
          { t: "p", c: "Most AI creation platforms require an internet connection. A stable connection makes the creative process much easier." },
          { t: "h", c: "3. AI Tools" },
          { t: "p", c: "You will need access to appropriate AI tools for the stages of your workflow." },
          { t: "h", c: "4. Video Editing Software" },
          { t: "p", c: "You'll need an editor to assemble your clips and create the final video." },
          { t: "h", c: "5. Creativity" },
          { t: "p", c: "This is perhaps the most important requirement. AI can generate thousands of possibilities, but you need to decide what you actually want to create." },
          { t: "h", c: "You Don't Need to Be a Filmmaker" },
          { t: "p", c: "You don't need years of filmmaking experience before you begin. Learning basic storytelling, visual composition, prompting and editing will help you produce better results." },
          { t: "h", c: "Key Takeaway" },
          { t: "p", c: "Start with what you have. You can improve your equipment and workflow as your skills grow." }
        ]
      },
      {
        title: "Lesson 6: Understanding the Role of Creativity",
        blocks: [
          { t: "p", c: "This is an important lesson because beginners sometimes become too dependent on AI. AI can generate impressive results, but it doesn't automatically understand your complete creative vision." },
          { t: "h", c: "AI Is the Tool. You Are the Creator." },
          { t: "p", c: "Think of AI like a powerful assistant. You provide:" },
          { t: "list", c: ["The idea", "The direction", "The story", "The decisions", "The creative judgment"] },
          { t: "p", c: "AI helps you execute those ideas." },
          { t: "h", c: "Why Your Creative Direction Matters" },
          { t: "p", c: "Two people using the same AI tool could produce completely different results because they have different:" },
          { t: "list", c: ["Ideas", "Prompts", "Storytelling styles", "Visual preferences", "Editing decisions"] },
          { t: "p", c: "The tool isn't the only thing that determines the quality of the final product. The creator matters." },
          { t: "h", c: "Don't Accept the First Result" },
          { t: "p", c: "Sometimes AI will produce something that isn't exactly what you wanted. That's normal. You may need to:" },
          { t: "list", c: ["Rewrite your prompt", "Change the description", "Adjust the character", "Change the environment", "Generate another version", "Edit the result"] },
          { t: "p", c: "AI creation is often an iterative process: Create -> Review -> Improve -> Create Again" },
          { t: "h", c: "Key Takeaway" },
          { t: "p", c: "Your creativity, judgment and direction are what turn AI-generated material into meaningful content." }
        ]
      },
      {
        title: "Practical Assignment",
        blocks: [
          { t: "p", c: "Before moving to Module 2, create a simple concept for your first AI movie. Answer these five questions:" },
          { t: "list", c: ["What is the title of your movie?", "Who is the main character?", "Where does the story take place?", "What is the genre? Drama, Romance, Mystery, Fantasy, Comedy, Horror, or Adventure.", "What is the story about? Write 2 to 5 sentences."] },
          { t: "ex", c: "Title: The Last Door. Main Character: Esther, a 19-year-old girl. Setting: An abandoned mansion. Genre: Mystery. Story: Esther discovers a mysterious locked door inside an abandoned mansion. Nobody in the town knows what is behind it, but Esther becomes determined to uncover the truth." },
          { t: "p", c: "Do not worry about creating the actual movie yet. Your goal at this stage is simply to develop the creative idea that you will gradually turn into an AI movie throughout this course." }
        ]
      },
      {
        title: "Module Recap",
        blocks: [
          { t: "p", c: "In this module, you learned:" },
          { t: "list", c: ["What AI content creation means", "What you can create with AI", "How AI movie creation works", "The different types of AI tools", "What you need to get started", "Why human creativity remains important", "The basic AI movie-production workflow"] },
          { t: "p", c: "Remember the workflow: IDEA -> SCRIPT -> PROMPT -> IMAGE -> VIDEO -> AUDIO -> EDIT -> FINAL MOVIE" }
        ]
      }
    ]
  },
  2: {
    lessons: [
      {
        title: "Lesson 1: Understanding Prompt Engineering",
        blocks: [
          { t: "p", c: "A prompt is an instruction given to an AI system to produce a specific result. Prompt engineering involves intentionally structuring, testing and refining prompts to improve the quality and consistency of AI outputs." },
          { t: "h", c: "Basic" },
          { t: "ex", c: "Create a woman in a city." },
          { t: "h", c: "Engineered" },
          { t: "ex", c: "Create a cinematic portrait of a 22-year-old African woman with warm dark-brown skin and long curly black hair, standing on a modern city street at night. Neon lights reflect on wet pavement. Use realistic skin texture, cinematic lighting, medium close-up framing and a sophisticated editorial photography style." },
          { t: "h", c: "Key Principle" },
          { t: "p", c: "Good prompting is about precision, not unnecessary length." }
        ]
      },
      {
        title: "Lesson 2: The Anatomy of an Effective Prompt",
        blocks: [
          { t: "p", c: "A strong prompt should contain the information necessary for the AI to make the right decisions. A useful structure is: ROLE -> OBJECTIVE -> CONTEXT -> DETAILS -> CONSTRAINTS -> OUTPUT" },
          { t: "list", c: ["Role: who should the AI act as", "Objective: what should it accomplish", "Context: what does it need to know", "Details: what should the result contain", "Constraints: what to avoid or maintain", "Output: what format should be produced"] },
          { t: "p", c: "Not every prompt requires every element. Use only what is relevant to the task." }
        ]
      },
      {
        title: "Lesson 3: Context, the Hidden Power of Prompting",
        blocks: [
          { t: "p", c: "AI performs better when it understands the context behind the request." },
          { t: "ex", c: "Write an advert for my fashion brand." },
          { t: "p", c: "compared with:" },
          { t: "ex", c: "Create a 20-second Instagram advertisement for a premium Nigerian fashion brand targeting women aged 18 to 30. The brand should feel sophisticated, youthful and confident. Focus on creating desire rather than simply describing the product." },
          { t: "p", c: "The second prompt gives the AI information about audience, platform, brand personality, objective, and content length." },
          { t: "h", c: "Professional Rule" },
          { t: "p", c: "If the AI repeatedly gives you the wrong type of result, check whether you gave it enough context before changing the tool." }
        ]
      },
      {
        title: "Lesson 4: Role Prompting and Expert Direction",
        blocks: [
          { t: "p", c: "Role prompting gives AI a specific professional perspective." },
          { t: "ex", c: "Act as a professional cinematographer specializing in cinematic advertising." },
          { t: "p", c: "Simply saying act as an expert isn't enough. A stronger instruction combines the role with the task." },
          { t: "ex", c: "Act as a professional cinematographer specializing in luxury advertising. Develop a cinematic shot concept for a 15-second perfume advertisement targeting young adults." },
          { t: "p", c: "This gives AI: Role + Expertise + Task + Direction." },
          { t: "h", c: "Remember" },
          { t: "p", c: "Don't just give AI a role. Give that role a specific job to perform." }
        ]
      },
      {
        title: "Lesson 5: Specificity, Constraints and Creative Control",
        blocks: [
          { t: "p", c: "Specificity gives you more control over the output. Describe subject, appearance, action, environment, lighting, camera, style, and mood." },
          { t: "p", c: "Use constraints to reduce unwanted results." },
          { t: "ex", c: "Maintain the character's facial identity, hairstyle and skin tone. Avoid distorted anatomy, unrealistic proportions and cartoon-like features." },
          { t: "h", c: "The Balance" },
          { t: "p", c: "Too little information gives AI too much freedom. Too many unrelated instructions make the prompt confusing. The goal is clear, relevant specificity." }
        ]
      },
      {
        title: "Lesson 6: Prompting for AI Images and Videos",
        blocks: [
          { t: "p", c: "Image and video prompts share many elements, but video prompts require movement." },
          { t: "h", c: "Image Prompt" },
          { t: "ex", c: "A young woman standing in a dark forest at night, cinematic lighting, realistic photography, mysterious atmosphere." },
          { t: "h", c: "Video Prompt" },
          { t: "ex", c: "A young woman slowly walks through a dark forest at night while fog moves between the trees. The camera follows behind her and gradually moves closer. Cinematic lighting, realistic movement, suspenseful atmosphere." },
          { t: "p", c: "For video, consider character movement, environmental movement, camera movement, pacing, and direction." }
        ]
      },
      {
        title: "Lesson 7: Character Consistency",
        blocks: [
          { t: "p", c: "Character consistency is essential when creating an AI movie. Your main character should remain recognizable across different scenes." },
          { t: "p", c: "Create a character reference containing name, age, skin tone, face, hair, eyes, body type, clothing, and distinctive features." },
          { t: "ex", c: "Maya: 20-year-old African woman, warm dark-brown skin, oval face, dark-brown eyes, long thick curly black hair, slim build and natural facial features." },
          { t: "h", c: "Professional Principle" },
          { t: "p", c: "Establish the character before producing the movie scenes." }
        ]
      },
      {
        title: "Lesson 8: Prompt Optimization and Iteration",
        blocks: [
          { t: "p", c: "Your first prompt does not need to be perfect. Professional prompting involves iteration: PROMPT -> GENERATE -> REVIEW -> IDENTIFY PROBLEM -> MODIFY -> REGENERATE." },
          { t: "h", c: "Initial" },
          { t: "ex", c: "A woman walking through a futuristic city." },
          { t: "h", c: "Optimized" },
          { t: "ex", c: "A 22-year-old African woman with warm dark-brown skin and long curly black hair walks through a futuristic city at night. Neon signs reflect on wet pavement. The camera follows her from behind with a slow cinematic tracking movement. Realistic lighting, natural movement and mysterious atmosphere." },
          { t: "p", c: "Don't randomly rewrite prompts. Diagnose the problem, then optimize the relevant section." }
        ]
      },
      {
        title: "Lesson 9: Building Professional Prompt Templates",
        blocks: [
          { t: "p", c: "Instead of creating every prompt from scratch, professional creators develop reusable prompt templates." },
          { t: "ex", c: "Create a [SHOT TYPE] of [CHARACTER] [ACTION] in [ENVIRONMENT] during [TIME]. The character is wearing [CLOTHING]. Use [LIGHTING], [CAMERA MOVEMENT], [VISUAL STYLE] and create a [MOOD] atmosphere. Maintain [CONSISTENCY REQUIREMENTS]." },
          { t: "p", c: "Templates help you work faster, maintain consistency, avoid forgetting important details, create multiple scenes efficiently, and build a repeatable workflow." }
        ]
      },
      {
        title: "Practical Assignment",
        blocks: [
          { t: "p", c: "Using the movie concept from Module 1:" },
          { t: "list", c: ["Create a character prompt for your main character", "Create an image prompt for the first visual scene", "Create a video prompt adding character, environmental and camera movement", "Optimize: generate, identify what went wrong, improve, and generate again"] },
          { t: "p", c: "Submit your original prompt, your optimized prompt, and the final result." }
        ]
      },
      {
        title: "Module Key Takeaways",
        blocks: [
          { t: "p", c: "Professional prompting involves: Context + Structure + Specificity + Constraints + Creative Direction + Optimization." },
          { t: "p", c: "The professional workflow is: DIRECT -> GENERATE -> REVIEW -> OPTIMIZE -> REGENERATE." },
          { t: "p", c: "The best prompt isn't necessarily the longest prompt. It is the prompt that communicates the right information clearly enough to produce the desired result." }
        ]
      }
    ]
  },
  3: {
    lessons: [
      {
        title: "Lesson 1: How to Use ChatGPT to Create Your Images",
        blocks: [
          { t: "video", c: "/videos/module-3-lesson-1.mp4" }
        ]
      },
      {
        title: "Lesson 2: Continuation",
        blocks: [
          { t: "video", c: "/videos/module-3-lesson-2.mp4" }
        ]
      },
      {
        title: "Lesson 3: How to Generate an Image Using a Reference Image",
        blocks: [
          { t: "video", c: "/videos/module-3-lesson-3.mp4" }
        ]
      }
    ]
  },
  4: {
    lessons: [
      {
        title: "How to Generate Your Videos Using Images (Kling AI)",
        blocks: [
          { t: "video", c: "/videos/module-4-lesson-1.mp4" }
        ]
      }
    ]
  },
  5: {
    lessons: [
      {
        title: "How to Edit Your Clips in CapCut Part 1",
        blocks: [
          { t: "video", c: "/videos/module-5-lesson-1.mp4" }
        ]
      },
      {
        title: "How to Edit Your Clips in CapCut Part 2",
        blocks: [
          { t: "video", c: "/videos/module-5-lesson-2.mp4" }
        ]
      }
    ]
  },
  6: {
    lessons: [
      {
        title: "Lesson: How to Make Money with AI Video Creation",
        blocks: [
          { t: "p", c: "AI video creation is more than just creating beautiful videos. It is a skill that can be turned into a service, business, or source of income." },
          { t: "p", c: "Here are some practical ways you can monetize your skill:" },
          { t: "h", c: "1. Create AI Advertisements" },
          { t: "p", c: "Businesses need promotional videos for their products and services. You can create short AI-powered advertisements for brands, shops, restaurants, fashion businesses, and more." },
          { t: "h", c: "2. Offer AI Video Services" },
          { t: "p", c: "You can work with clients who need social media videos, product videos, storytelling videos, promotional content, or other creative projects." },
          { t: "h", c: "3. Create AI UGC Content" },
          { t: "p", c: "You can create product-style videos for brands using AI-generated characters or visuals, especially when a brand wants content without hiring a traditional model." },
          { t: "h", c: "4. Freelancing" },
          { t: "p", c: "You can offer your AI video services through freelance platforms or directly to potential clients through social media." },
          { t: "h", c: "5. Create and Sell Digital Products" },
          { t: "p", c: "Once you become skilled, you can create products such as prompt packs, templates, guides, or other resources that help people create AI content." },
          { t: "h", c: "6. Build Your Own Content Brand" },
          { t: "p", c: "You can use AI videos to grow your own TikTok, Instagram, YouTube, or other social media platforms and eventually earn through brand partnerships, affiliate marketing, digital products, or other monetization methods." },
          { t: "h", c: "How to Get Your First Client" },
          { t: "p", c: "Don't wait until you feel completely perfect." },
          { t: "p", c: "Start by creating 2 to 3 strong sample videos that demonstrate what you can do. Put them into a simple portfolio and begin reaching out to businesses, creators, and potential clients." },
          { t: "p", c: "Your process can be:" },
          { t: "ex", c: "Learn -> Create Samples -> Build Portfolio -> Find Clients -> Deliver Quality Work -> Get Paid" },
          { t: "h", c: "Important Reminder" },
          { t: "p", c: "People are not paying you simply because you know how to use AI tools." },
          { t: "p", c: "They are paying you because you can use those tools to create something valuable for them." },
          { t: "p", c: "So don't just learn how to generate AI videos. Learn how to use AI video creation to solve problems, promote businesses, tell stories, and create results." },
          { t: "p", c: "That is how you turn AI video creation from a skill into an income-generating opportunity." }
        ]
      }
    ]
  }

};
