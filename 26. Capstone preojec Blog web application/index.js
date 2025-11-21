import express from "express";
import bodyParser from "body-parser";
import methodOverride  from "method-override";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride('_method'));

app.get("/", (req, res) => {
    res.render("index.ejs", {posts: posts});
});

app.get("/create-post", (req, res) => {
    res.render("create-post.ejs");
});

app.get("/view-post", (req, res) => {
    var selectedPostId = parseInt(req.query.id);
    var selectedPost = getPostById(selectedPostId);
    res.render("view-post.ejs", {post: selectedPost});
})

app.get("/edit-post", (req, res) => {
    var selectedPostId = parseInt(req.query.id);
    var selectedPost = getPostById(selectedPostId);
    console.log(selectedPost)
    res.render("edit-post.ejs", {post: selectedPost})
})

app.post("/edit-post/:id", (req, res) => {
    var selectedPostId = parseInt(req.params.id);
    res.redirect(`/edit-post?id=${selectedPostId}`);
})

app.post("/to/:id", (req, res) => {
    var selectedPostId = parseInt(req.params.id);
    var selectedPost = getPostById(selectedPostId);
    res.redirect(`/view-post?id=${selectedPost.id}`);
})

app.post("/submit", (req, res) => {
    var postAuthor = req.body["author"];
    var postTitle = req.body["title"];
    var postPost = req.body["post"];
    var postRefferences = req.body["refferences"];
    var postId = posts.length;
    posts.push(new Post(postId, postAuthor, postTitle, postPost, postRefferences));
    res.redirect("/");
});

app.patch("/patch/:id", (req, res) => {
    var postId = parseInt(req.params.id);  
    var index = -1
    while (index < posts.length - 1) {
        index++
        if (posts[index].id === postId) {
            posts[index].author = req.body["author"];
            posts[index].title = req.body["title"];
            posts[index].post = req.body["post"];
            posts[index].refferences = req.body["refferences"];
        }
    }
    res.redirect(`/view-post?id=${postId}`)
})

app.delete("/delete/:id", (req, res) => {
    var id = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== id);
    console.log(posts)
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

function getPostById(id) {
    var post = posts.filter(p => p.id == id)[0];
    return post;
}

var posts = [
    new Post(
        0,
        "Sam", 
        "Sam's journey", 
        "I starte here, whent here, staid here and leaved.",
        "Myself"
    ),
    new Post(
        1,
        "Dude", 
        "Dude boss", 
        "I am the boss of you all!",
        "Self proclamed"
    ),
    new Post(
        2,
        "Mimi", 
        "Landing techniques", 
        "Alwayse land on your feet.",
        "Cat art"
    )
]

function Post(id, author, title, post, refferences) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.post = post;
    this.refferences = refferences;
}