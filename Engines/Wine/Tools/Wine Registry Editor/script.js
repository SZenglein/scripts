include(["engines", "wine", "engine", "object"]);

/**
 * tool to open the Wine registry editor
*/
var toolImplementation = {
    run: function (container) {
        new Wine()
            .prefix(container)
            .run("regedit")
            .wait();
    }
};

/* exported Tool */
var Tool = Java.extend(org.phoenicis.engines.EngineTool, toolImplementation);