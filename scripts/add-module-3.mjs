import fs from "fs";

const path = "lib/course-content.js";
let content = fs.readFileSync(path, "utf8");

if (content.includes("3: {")) {
  console.log("Module 3 already present, no changes made.");
  process.exit(0);
}

const module3 = `,
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
  }
`;

const marker = "\n};";
const lastIndex = content.lastIndexOf(marker);
if (lastIndex === -1) {
  console.error("Could not find the end of LESSON_CONTENT. No changes made.");
  process.exit(1);
}

content = content.slice(0, lastIndex) + module3 + marker + content.slice(lastIndex + marker.length);
fs.writeFileSync(path, content);
console.log("Module 3 content added.");
