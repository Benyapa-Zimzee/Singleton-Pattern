class LoggerUI {
    constructor() {
        if (LoggerUI.instance) {
            return LoggerUI.instance;
        }
        LoggerUI.instance = this;

        this.initUI();
        this.loadLog();
    }

    initUI() {
        this.textarea = document.getElementById("logTextarea");
        this.saveButton = document.getElementById("saveButton");
        this.saveButton.addEventListener("click", this.saveLog.bind(this));
    }

    loadLog() {
        const logContent = localStorage.getItem("saved_log");
        if (logContent) {
            this.textarea.value = logContent;
        }
    }

    saveLog() {
        const logMessage = this.textarea.value;
        localStorage.setItem("saved_log", logMessage);
        alert("Log saved successfully!");
    }
}

new LoggerUI();
