const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../cosmos_app/raw_data');
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const TOPICS = ['AI', 'Cooking', 'History', 'Physics', 'Cats', 'React', 'NodeJS', 'Aliens'];
const FORMATS = ['markdown', 'text', 'json', 'csv'];

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessyContent(id) {
    const topic = random(TOPICS);
    const related = random(TOPICS);

    // Simulate messiness: different formats, missing frontmatter, broken links
    const contentTypes = [
        `# ${topic} Note ${id}\n\nImportant thought about [[${related}]].`,
        `Title: ${topic} - ${id}\nDate: 2024-01-01\n\n- Point 1\n- Point 2 related to [[${related}]]`,
        `{"id": "${id}", "topic": "${topic}", "note": "Connection to ${related}"}`,
        `JUST TEXT NOTE ${id}\nAbout ${topic} and ${related}.`,
        `---\ntags: [${topic}]\n---\n\nStandard note about [[${related}]].`
    ];

    return contentTypes[id % contentTypes.length];
}

console.log(`Generating 10 messy files in ${OUTPUT_DIR}...`);

for (let i = 1; i <= 10; i++) {
    const filename = `note_${i}_${random(TOPICS).toLowerCase()}.${i % 3 === 0 ? 'txt' : 'md'}`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), generateMessyContent(i));
    console.log(`- Created ${filename}`);
}

console.log(" Chaos generated! 🌪️");
