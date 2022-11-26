// ==UserScript==
// @name        Looksy Import
// @namespace   https://prodzpod.github.io/witness/merge.html
// @match       https://prodzpod.github.io/witness/merge.html
// @grant       none
// @version     1.0
// @author      Zachary Talis
// @description Import from sequence file to Looksy Merger
// ==/UserScript==

/////                     Sequence link                     /////
const sequenceUrl = "http://127.0.0.1:5500/sequence.seq";
/////                     Sequence link                     /////

function clearExistingList(list) {
    for (var i = list.childElementCount - 1; i >= 0; i--) {
        deleteData(i);
    }
}

function insertBoxAtIndex(index) {
    insertData(index);
}

function addLinkAtIndex(link, index) {
    let boxId = "list-" + index;
    let box = document.getElementById(boxId);
    box.value = link;
    writeData(index, box.value);
}

function main(text) {

    // Get links from text
    let lines = text.split("\n");
    let links = [];
    for (const line of lines) {
        if (line.length > 0 && line[0] != "#") {
            links.push(line);
        }
    }

    // Clear list boxes
    let list = document.getElementById("list");
    clearExistingList(list);

    // Add to 
    let index = 0;
    for (const linkIndex in links) {
        let link = links[linkIndex];
        if (index != 0) {
            insertBoxAtIndex(index);
        }
        addLinkAtIndex(link, index);
        index++;
    }

}

fetch(sequenceUrl)
    .then(response => response.text())
    .then(text => main(text))
    .catch(error => console.log("Sequence not found at: " + sequenceUrl));
