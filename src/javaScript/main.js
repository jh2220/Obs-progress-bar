var finalNumber = 0;
var bar;

$(document).ready(() => {
  loadRandom();
});

function loadRandom() {
  var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "100%", height: "100%" },
    text: {
      style: {
        color: "#999",
        padding: 0,
        width: "100%",
        textAlign: "center",
        transform: null,
      },
      autoStyleContainer: false,
    },
    from: { color: "#ED6A5A" },
    to: { color: "#0099FF" },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
      bar.path.setAttribute("stroke", state.color);
    },
  });

  bar.animate(finalNumber);
  $("#textScreen").text(itemList.itemText[itemList.itemIndex]);

  const myInterval = () => {
    const timerInterval = setInterval(timerAction, itemList.timeInterval);

    function timerAction() {
      generateValue();

      changeValue(bar, true);
    }

    $(document).keypress((event) => {
      if (event.keyCode == 112) {
        clearInterval(timerInterval);

        bar.animate("1");

        setTimeout(() => {
          changeValue(bar, false);
        }, 2000);
      }
    });
  };

  myInterval();

  $(document).keypress((event) => {
    if (event.keyCode == 112) {
      itemList.itemIndex += 1;
      finalNumber = 0;

      if (itemList.itemIndex > itemList.itemText.length - 1) {
        itemList.itemIndex = 0;
      }

      setTimeout(() => {
        myInterval();
      }, 2100);
    }
  });
}

function changeValue(bar, smooth) {
  $("#textScreen").text(itemList.itemText[itemList.itemIndex]);

  if (smooth == true) {
    bar.animate(finalNumber);
  } else {
    bar.set(finalNumber);
  }
}

function generateValue() {
  var number = Math.trunc(Math.random() * (5 - 1) + 1);

  if (finalNumber >= 1.0) {
    finalNumber = 0.98;
    itemIndex;
  } else if (number == 1) {
    finalNumber += 0.03;
  } else if (number == 2) {
    finalNumber += 0.07;
  } else if (number == 3) {
    finalNumber += 0.1;
  } else if (number == 4) {
    finalNumber += 0.12;
  }

  if (finalNumber >= 1.0) {
    finalNumber = 0.99;
  }
}
