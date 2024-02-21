-- alice 라는 Username 을 가진 사람이
-- 단 모든 댓글의 수 

-- SELECT *
-- FROM user
-- WHERE username = 'Alice';

-- SELECT *
-- FROM comment
-- WHERE user_id = ();

-- SQL query - SQL query안에 또 존재하는 SQL query
-- SELECT *
-- FROM post
-- WHERE user_id = (
--     SELECT user_id
--     FROM user
--     WHERE username = 'Alice'
-- );

-- SELECT *
-- FROM comment
-- WHERE post_id = (
--     SELECT post_id
--     FROM post
--     WHERE user_id = (
--         SELECT user_id
--         FROM user
--         WHERE username = 'Alice'
--     )
-- );


-- 아직 Post 안쓴 사람
-- SELECT A.username, A.email, A.user_id,
--     B.user_id, B.content
-- FROM user as A
-- RIGHT JOIN post as B
-- ON A.user_id = B.user_id

-- right과 Inner 같은 이유 

-- user & post & comment 한 번에 모두 보고 싶다
-- user 를 중심으로 

-- 각 게시글에 달린 댓글 가져오기
-- SELECT *
-- FROM post
-- INNER JOIn comment
-- ON post.post_id = comment.post_id
-- WHERE post.post_id = 1;

-- SQL for DBMS
-- SQL for RDBMS

-- SELECT *
-- FROm user;

-- SELECT * FROM post
-- ORDER BY post_id;

SELECT post.post_id, COUNT(comment.comment_id) AS comment_count
FROM post
LEFT JOIN comment ON post.post_id = comment.post_id
GROUP BY post.post_id;