package bsu.fpmi.twitter;

import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.stream.Collectors;

@WebServlet("/tweets/*")
public class Tweets extends HttpServlet {
    private static Posts tweets = new Posts();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(tweets.getPost(id)));
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(tweets.removePost(id)));
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        String[] url = request.getRequestURI().split("/");
        if (url[2].equals("search")) {
            Gson gson = new Gson();
            response.getWriter().print(tweets.getAll().stream().map(gson::toJson).collect(Collectors.joining("\n")));
        }
    }
} 