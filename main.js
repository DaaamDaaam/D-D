async function recupereQuiz(id) {
    const res = await fetch(`q${id}/quiz.json`);
    if(res.ok) {
        const json = await  res.json();
        return json;
    }
    else {
        throw new Error(res.status);
    }
}