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
import { checkString, regexes } from 'discord-osiris'

const susMessage = "Hello don't click on this link, it's dangerous! https://dlscord-egfits.com/fromsteamnitro"

checkString(susMessage, regexes).then(console.log) // true
```

### Extend patterns
The second parameter of checkString (`patterns`) accepts an array of either RegExp or strings. You can pass your own array and/or extend the current configuration.
