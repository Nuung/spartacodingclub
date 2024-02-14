SELECT *
FROM user
WHERE username = 'Alice';

SELECT *
FROM post
WHERE user_id = 1;

SELECT *
FROM comment
WHERE post_id in (1, 2, 3);