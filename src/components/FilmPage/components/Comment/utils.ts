
export async function getReviews(movieId: string){
    const response = await fetch(`http://localhost:3001/api/reviews?movieId=${movieId}`);

    return await response.json();
}
