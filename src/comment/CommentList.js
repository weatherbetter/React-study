import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        regno: "981204-2849102",
        comment: "안녕하세요. 홍길동입니다.",
    },
    {
        name: "고길동",
        regno: "081204-1849102",
        comment: "돌리가 싫어요.",
    },
    {
        name: "홍길동",
        regno: "681204-3849102",
        comment: "호부호형이 꿈입니다.",
    },
];

const users = [
    {
        name: "홍길동",
        image: "https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-business-men-icon-png-image_4186858.jpg",
    },
    {
        name: "고길동",
        image: "https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-avatar-icon-png-image_4162757.jpg",
    },
];

const commentsAndUsers = comments.map((c) => ({
    sex: /1|3/.test(c.regno[7]) ? "남" : "여",
    ...c,
    image: users.filter((u) => u.name === c.name)[0].image,
}));

const s = (name) => users.filter((u) => u.name === name)[0].image;
console.log(s);

// console.log(commentsAndUsers);
function CommentList(props) {
    return (
        <>
            {commentsAndUsers.map((c, index) => (
                <Comment
                    key={index}
                    name={c.name}
                    comment={c.comment}
                    image={c.image}
                />
            ))}
        </>
    );
}
export default CommentList;
