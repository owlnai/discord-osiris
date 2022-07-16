# Osiris ⚖️
> NOTE: THIS IS STILL A **WORK IN PROGRESS**
Judges dangerous Discord links
## Features
- Fully-typed with TypeScript ✨
- Promise-based RegEx matching 📐
- Can detect multiple links 🔄️
- Optimized for speed (~3ms per string) 🚀
## Usage
```JavaScript
import { checkString } from '@owlnai/osiris'

const susMessage = "Hello don't click on this link, it's dangerous! https://dlscord-egfits.com/fromsteamnitro"

checkString(susMessage).then(console.log) // true
```
