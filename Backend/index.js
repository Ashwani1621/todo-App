const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const { createTodo, updateTodo } = require('./types');
const todo = require('./db,js');

app.use(express.json());
app.get("/todos", async (req, res) => {
    const todos = await todo.find();
    res.json(todos);
});
app.post("/todos", async (req, res) => {
    
    const createPayload = req.body;
    const result = createTodo.safeParse(createPayload);
    if(!result.success) {
        res.status(400).send(result.error.errors);
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
        
    })

    res.json({message: "Todo created successfully"});

});
app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const result = updateTodo.safeParse(updatePayload);
    if(!result.success) {
        res.status(400).send(result.error.errors);
        return;
    }
    
    await todo.update({
        id: req.body.id},{
        completed: true
        }) 
    res.json({message: "Todo updated successfully"});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});