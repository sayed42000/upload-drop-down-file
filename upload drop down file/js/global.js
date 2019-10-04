(function(){
    'use strict';

    var dropZone = document.getElementById('drop-zone');
    var startUpload=function(files){
        console.log(files);
    }

    dropZone.ondrop = function (e) {
        e.preventDefault();
        console.log(e.dataTransfer.files);
        this.className = 'upload-console-drop';
        startUpload(1);
        return false;
    }

    dropZone.ondragover=function(){
        this.className ='upload-console-drop drop';
        return false;
    }
    dropZone.ondragleave = function () {
        this.className = 'upload-console-drop';
        return false;
    }
}());