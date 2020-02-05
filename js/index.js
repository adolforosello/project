//var turnModel = new TurnModel();
var turnController = new TurnController();

var model = new IndexModel();
var controller = new IndexController(model);
var index = new IndexView(new TurnsView(turnController), controller, model);
