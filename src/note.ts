/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

const editSection = document.getElementById("editSection");
const displayText = document.getElementById("displayText");
const noteTextArea = document.getElementById("noteTextArea");
const saveButton = document.getElementById("saveButton");

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags', WA.player.tags);

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));


    if (WA.player.tags.includes("admin")) {
        displayText.style.display = "none";
        noteTextArea.value = WA.state.noteText ?? "";
        saveButton.addEventListener("click", (event) => {
            WA.state.noteText = noteTextArea.value;
        });
    } else {
        editSection.style.display = "none";
        displayText.innerText = WA.state.noteText;
    }

}).catch(e => console.error(e));

export {};
