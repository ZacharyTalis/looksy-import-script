# looksy-import-script

Violentmonkey script to import a sequence file (`.seq`) into [Looksy Merger](https://prodzpod.github.io/witness/merge.html).

## What the heck are sequence files?

Sequences stored in plaintext: see this repo's [sequence.seq](https://github.com/ZacharyTalis/looksy-import-script/blob/main/sequence.seq) for an example. Super useful for notating your sequences with comments <3

## Install instructions (for Firefox)

1. Install the [Violentmonkey addon](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) for Firefox.
2. In the Violentmonkey dashboard, add a new script. Copy-paste the code from [looksy-import.js](https://github.com/ZacharyTalis/looksy-import-script/blob/main/looksy-import.js), then `Save`.
3. Install [VSCode](https://code.visualstudio.com).
4. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): in VSCode, press `Ctrl+P` and paste the below snippet.

```
ext install ritwickdey.LiveServer
```

5. Create a new folder and drop in your sequence (named `sequence.seq`). Open the folder in VSCode: `File > Open Folder`.

6. Click the `Go Live` button in the bottom-right corner.

Reload Looksy Merger. If everything's set up, your sequence should auto-populate!
