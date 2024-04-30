import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";

const Ratings = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [newComment, setNewComment] = useState({
    rating: 0,
    comment: "",
  });

  const [comments, setComments] = useState([
    {
      id: 1,
      rating: 3,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      rating: 4,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);

  const [editedComment, setEditComment] = useState({
    id: null,
    rating: 0,
    comment: "",
  });

  const handleAdd = () => {
    if (!newComment.rating || !newComment.comment) {
      toast.error("Silahkan isi komentar dulu");
      return;
    }
    const newId = comments.length + 1;
    setComments([
      ...comments,
      {
        id: newId,
        rating: newComment.rating,
        comment: newComment.comment,
      },
    ]);
    setNewComment({ rating: 0, comment: "" });
  };

  const handleSave = () => {
    const updateComment = comments.map((comment) =>
      comment.id === editedComment.id ? editedComment : comment
    );
    setComments(updateComment);
    setEditComment({ id: null, rating: 0, comment: "" });
    setIsEdit(false);
  };

  const handleDelete = (id) => {
    const updateComment = comments.filter((comment) => comment.id !== id);
    setComments(updateComment);
  };

  return (
    <div className="mx-5 my-5 md:container md:mx-auto md:px-12">
      <ToastContainer />
      <h1 className="text-2xl font-bold my-5 font-kodeMono">
        Bagaimana anda menggambarkan situs web ini?
      </h1>
      <div className="shadow-md rounded">
        <div className="flex justify-start items-center mt-3 mx-3">
          <Rating
            name="rating"
            initialRating={newComment.rating}
            onChange={(rate) => setNewComment({ ...newComment, rating: rate })}
            emptySymbol={"far fa-star text-2xl text-yellow-300"}
            fullSymbol={"fas fa-star text-2xl text-yellow-300"}
          />
        </div>
        <hr className="my-3" />
        <div className="mx-3 mb-3">
          <textarea
            name="comment"
            type="text"
            placeholder="Komentar anda..."
            value={newComment.comment}
            onChange={(e) => {
              setNewComment({ ...newComment, comment: e.target.value });
            }}
            className="border-none p-2 h-[8rem] rounded-md w-full focus:outline-none focus:border-transparent focus:ring-transparent"
          ></textarea>
        </div>
        <div className="flex justify-end pb-3 mx-3">
          <button
            className="bg-green-400 text-white px-4 py-2 rounded-md"
            onClick={handleAdd}
          >
            Kirim
          </button>
        </div>
      </div>

      {comments.map((comment) => (
        <div
          className="bg-white rounded-lg shadow-md p-4 my-3"
          key={comment.id}
        >
          <div className="flex items-center w-full">
            <img
              src="https://i.pravatar.cc/150"
              alt="avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-grow">
              {isEdit && editedComment.id === comment.id ? (
                <div className="flex items-center justify-between w-full mb-2">
                  <div>
                    <span className="font-bold text-lg mr-2">Anon</span>
                    <Rating
                      initialRating={editedComment.rating}
                      onChange={(rate) =>
                        setEditComment({ ...editedComment, rating: rate })
                      }
                      emptySymbol={"far fa-star text-yellow-300"}
                      fullSymbol={"fas fa-star text-yellow-300"}
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="bg-green-400 text-white px-4 py-2 rounded-md"
                      onClick={handleSave}
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full mb-2">
                  <div>
                    <span className="font-bold text-lg mr-2">Anon</span>
                    <Rating
                      readonly
                      initialRating={comment.rating}
                      emptySymbol={"far fa-star text-yellow-300"}
                      fullSymbol={"fas fa-star text-yellow-300"}
                    />
                  </div>
                  <div className="flex gap-3">
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(comment.id)}
                    />
                    <FaEdit
                      className="text-yellow-500 cursor-pointer"
                      onClick={() => {
                        setEditComment(comment);
                        setIsEdit(true);
                      }}
                    />
                  </div>
                </div>
              )}
              <p className="text-gray-700">
                {isEdit && editedComment.id === comment.id ? (
                  <textarea
                    name="editedComment"
                    type="text"
                    placeholder="Your Comment"
                    value={editedComment.comment}
                    onChange={(e) => {
                      setEditComment({
                        ...editedComment,
                        comment: e.target.value,
                      });
                    }}
                    className="border p-2 h-[8rem] rounded-md w-full focus:outline-none focus:border-green-500 focus:ring-transparent"
                  ></textarea>
                ) : (
                  comment.comment
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
