import contexts from "./contexts";

let ioc = contexts();

let app = ioc.get("App");
app.start();
