import { rest } from "msw";

export const handlers = [
  rest.get(
    `https://dev-club-movie-server.vercel.app/genresMovies`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ data: [{ name: "daniel", imgUrl: "daniel" }] })
      );
    }
  ),
];
