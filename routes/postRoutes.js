const express = require("express");
const PostController = require("../controllers/PostController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, PostController.createPost);
router.post(
  "/create-with-hashtags",
  authMiddleware,
  PostController.createPostWithHashtags
);
router.get("/get", PostController.getAllPosts);
router.get("/get/:postId", PostController.getPostById);
router.get("/get-detail/:postId", PostController.getPostDetailById);
router.get("/get-bookmarked", authMiddleware, PostController.getAllBookmarkedPostsUPDetails);
router.put("/update/:postId", authMiddleware, PostController.updatePostById);
router.delete("/delete/:postId", authMiddleware, PostController.deletePostById);
router.post("/get-up-details", authMiddleware, PostController.getAllPostsUPDetails);
router.post("/votes/:postId", authMiddleware, PostController.votes);
router.post("/add-view/:postId", PostController.addView);
router.post("/add-hashtag/:postId", authMiddleware, PostController.addHashtag);
router.post("/toggle-bookmark/:postId", authMiddleware, PostController.toggleBookmarkPost);
router.get("/search", PostController.searchPostsByKeyword);

module.exports = router;
