function getAllCallback(list) {
  var apps = [
        { "name": "wandertab",
          "id": "fobdcmnamenjmkffajcbljjpgiolooeh"
        },
        { "name": "animatedtab",
          "id": "kenhfdoiondldpcoajdbackbnmehgahl"
        }
      ],
      ext, i, random;

    chrome.management.setEnabled(apps[0].id, false);
    chrome.management.setEnabled(apps[1].id, false);

    random = getRandomInt(0, apps.length);
    randomApp = apps[random];
    
    for( i in list ) {
      if (randomApp.id === list[i].id) {
        chrome.management.setEnabled(randomApp.id, true);
        break;
      } 
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

chrome.tabs.onCreated.addListener(function(tab) {
  chrome.management.getAll(getAllCallback);
});

