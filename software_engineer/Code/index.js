const cors = require("cors")
const express = require("express")
const app = express()

app.use(cors()) //CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API
app.use(express.json()) //GET JSON data From body
const client = require("./db-conx")

app.listen(3001, () => {
    console.log("  * -- * SERVER STARTED AT 3001 PORT * -- *  ")
})

//ADD TICKETS
app.post("/tickets", async (req, res) => {
    try {
        const {id} = req.body
        const {priority} = req.body
        const {status} = req.body
        const {subject} = req.body
        const {description} = req.body
        const {created_at} = req.body
        //QUERY
        const result = await client.query(
            "INSERT INTO tickets (id,priority,status,subject,description,created_at) VALUES($1,$2,$3,$4,$5,$6) RETURNING *", [id, priority, status, subject, description, created_at]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Erreur" + err.message)
    }
})

//GET TICKETS
app.get("/tickets", async (req, res) => {
    try {
        //QUERY
        const tickets = await client.query("SELECT * FROM tickets");
        res.json(tickets.rows);
    } catch (error) {
        console.error("Erreur" + error.message);
    }
});

//GET TICKET BY ID
app.get("/tickets/:id", async (req, res) => {
    try {
        const {id} = req.params;
        //QUERY
        const ticket_detail = await client.query("SELECT * FROM tickets WHERE id = $1", [id]);
        res.json(ticket_detail.rows[0]);
    } catch (err) {
        console.error("Erreur" + err.message);
    }
});

//EDIT TICKETS
app.put("/tickets/:id", async (req, res) => {
    try {
        const {priority} = req.body
        const {status} = req.body
        const {subject} = req.body
        const {description} = req.body
        const {created_at} = req.body
        const {id} = req.params;
        //QUERY
        const updateTicket = await client.query(
            "UPDATE tickets SET priority=$1,status=$2,subject=$3,description=$4,created_at=$5 WHERE id = $6", [priority, status, subject, description, created_at, id]);
        res.json("Ticket UPDATED ****:))");
    } catch (err) {
        console.error("Erreur" + err.message);
    }
});

//DELETE TICKETS
app.delete("/tickets/:id", async (req, res) => {
    try {
        const {id} = req.params;
        //QUERY
        const deleteTicket = await client.query("DELETE FROM tickets WHERE id =$1", [id]);
        res.json("The ticket was deleted successfully");
    } catch (err) {
        console.log("Erreur" + err.message);
    }
});
