var exec = cordova.require('cordova/exec');

var sunmiInnerPrinter = function() {
    console.log('Printer instanced');
};

sunmiInnerPrinter.prototype.show = function(msg, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'Printer', 'show', [msg]);
};


sunmiInnerPrinter.prototype.printerInit =  ()=> {
    return new Promise( (resolve, reject)=> {
      exec(resolve, reject, "Printer", "printerInit", []);
    });
  }

// sunmiInnerPrinter.prototype.printerInit = function(onSuccess, onError) {
//     var errorCallback = function(obj) {
//         onError(obj);
//     };

//     var successCallback = function(obj) {
//         onSuccess(obj);
//     };

//     exec(successCallback, errorCallback, 'Printer', 'printerInit');
// };

sunmiInnerPrinter.prototype.printerSelfChecking = function(onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'Printer', 'printerSelfChecking');
};


sunmiInnerPrinter.prototype.getPrinterSerialNo = function(text, onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'getPrinterSerialNo', [text]);
};

sunmiInnerPrinter.prototype.getPrinterVersion = function(text, onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'getPrinterVersion', [text]);
};

sunmiInnerPrinter.prototype.hasPrinter = function(text, onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'hasPrinter', [text]);
};

sunmiInnerPrinter.prototype.getPrintedLength = function(text, onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'getPrintedLength', [text]);
};

// sunmiInnerPrinter.prototype.lineWrap =  (count)=> {
//     return new Promise( (resolve, reject)=> {
//       exec(resolve('1'), reject('0'), "Printer", "lineWrap", [count]);
//     });
//   }
sunmiInnerPrinter.prototype.lineWrap = function(count, onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'lineWrap', [count]);
};


sunmiInnerPrinter.prototype.sendRAWData =  (base64Data)=> {
    return new Promise( (resolve, reject)=> {
      exec(resolve, reject, "Printer", "sendRAWData", [base64Data]);
    });
  }
// sunmiInnerPrinter.prototype.sendRAWData = function(data, onSuccess, onError) {
//     var errorCallback = function(obj) {onError(obj);};
//     var successCallback = function(obj) {onSuccess(obj);};
//     exec(successCallback, errorCallback, 'Printer', 'sendRAWData', [data]);
// };

sunmiInnerPrinter.prototype.setAlignment =  (alignment)=> {
    return new Promise( (resolve, reject)=> {
      exec(resolve, reject, "Printer", "setAlignment", [alignment]);
    });
  }

// sunmiInnerPrinter.prototype.setAlignment = function(align, onSuccess, onError) {
//     var errorCallback = function(obj) {onError(obj);};
//     var successCallback = function(obj) {onSuccess(obj);};
//     exec(successCallback, errorCallback, 'Printer', 'setAlignment', [align]);
// };

sunmiInnerPrinter.prototype.setFontName = function(name, onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'setFontName', [name]);
};

sunmiInnerPrinter.prototype.setFontSize =  (fontSize)=> {
    return new Promise( (resolve, reject)=> {
      exec(resolve, reject, "Printer", "setFontSize", [fontSize]);
    });
  }

// sunmiInnerPrinter.prototype.setFontSize = function(size, onSuccess, onError) {
//     var errorCallback = function(obj) {onError(obj);};
//     var successCallback = function(obj) {onSuccess(obj);};
//     exec(successCallback, errorCallback, 'Printer', 'setFontSize', [size]);
// };

sunmiInnerPrinter.prototype.printTextWithFont = function(text, typeface, fontsize,  onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'printTextWithFont', [text, typeface, fontsize]);
};

sunmiInnerPrinter.prototype.printColumnsText = function(colsTextArr, colsWidthArr, colsAlign,  onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'printColumnsText', [colsTextArr, colsWidthArr, colsAlign]);
};

// sunmiInnerPrinter.prototype.printBitmap = function(data, width, height,  onSuccess, onError) {
//     var errorCallback = function(obj) {onError(obj);};
//     var successCallback = function(obj) {onSuccess(obj);};
//     exec(successCallback, errorCallback, 'Printer', 'printBitmap', [data, width, height]);
// };

sunmiInnerPrinter.prototype.printBitmap = (data, width, height)=> {
  return new Promise( (resolve, reject)=> {
    exec(resolve, reject, "Printer", "printBitmap", [
      data,
      width,
      height,
    ]);
  });
};



sunmiInnerPrinter.prototype.printTextWithFont = function(text, typeface, fontsize,  onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'printTextWithFont', [text, typeface, fontsize]);
};

sunmiInnerPrinter.prototype.printBarCode = function(data, symbology, width, height,  onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'printBarCode', [data, symbology, width, height]);
};

sunmiInnerPrinter.prototype.printQRCode =  (qrCodeData, moduleSize, errorLevel)=> {
    return new Promise( (resolve, reject)=> {
      exec(resolve, reject, "Printer", "printQRCode", [
        qrCodeData,
        moduleSize,
        errorLevel,
      ]);
    });
  }
// sunmiInnerPrinter.prototype.printQRCode = function(data, moduleSize, errorLevel, onSuccess, onError) {
//     var errorCallback = function(obj) {onError(obj);};
//     var successCallback = function(obj) {onSuccess(obj);};
//     exec(successCallback, errorCallback, 'Printer', 'printQRCode', [data, moduleSize, errorLevel]);
// };

sunmiInnerPrinter.prototype.printOriginalText = function(text, onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'printOriginalText', [text]);
};


sunmiInnerPrinter.prototype.printString =  (text) => {
    return new Promise( (resolve, reject)=> {
      exec(resolve, reject, "Printer", "printString", [text]);
    });
  }

// sunmiInnerPrinter.prototype.printString = function(text, onSuccess, onError) {
//     var errorCallback = function(obj) {onError(obj);};
//     var successCallback = function(obj) {onSuccess(obj);};
//     exec(successCallback, errorCallback, 'Printer', 'printString', [text]);
// };

sunmiInnerPrinter.prototype.printerStatusStartListener = function(onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'printerStatusStartListener');
};

sunmiInnerPrinter.prototype.printerStatusStopListener = function(onSuccess, onError) {
    var errorCallback = function(obj) {onError(obj);};
    var successCallback = function(obj) {onSuccess(obj);};
    exec(successCallback, errorCallback, 'Printer', 'printerStatusStopListener');
};


if (typeof module != 'undefined' && module.exports) {
    module.exports = sunmiInnerPrinter;
}
