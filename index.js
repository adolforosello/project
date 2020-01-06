var model = new IndexModel();
var controller = new IndexController(model);
var index = new IndexView(controller, model);

index.loadIndex();