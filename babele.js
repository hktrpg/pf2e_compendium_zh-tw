Hooks.once("init", () => {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: "pf2e_compendium_chn",
      lang: "cn",
      dir: "compendium",
    });

    Babele.get().registerConverters({
      "npc-portrait-path": (data, translations, dataObject, translatedCompendium, translationObject) => {
        return game.npcTrans.portrait(data, translations, dataObject, translatedCompendium, translationObject);
      },
      "npc-token-translation": (data, translations, dataObject, translatedCompendium, translationObject) => {
        return game.npcTrans.token(data, translations, dataObject, translatedCompendium, translationObject);
      },
      "npc-data-translation": (data, translations, dataObject, translatedCompendium, translationObject) => {
        return game.npcTrans.data(data, translations, dataObject, translatedCompendium, translationObject);
      },
      "npc-item-translation": (data, translations, dataObject, translatedCompendium, translationObject) => {
        return game.npcTrans.item(data, translations, dataObject, translatedCompendium, translationObject);
      },
    });
  }
});