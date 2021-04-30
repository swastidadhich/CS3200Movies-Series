package com.example.springtemplate.daos;

import com.example.springtemplate.models.User;

import java.sql.Date;

import java.sql.*;
import java.util.*;

@SuppressWarnings("ALL")
public class UserJdbcDao {
    static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String HOST = "localhost:3306";
    static final String SCHEMA = "db_series";
    static final String CONFIG = "serverTimezone=UTC";
    static final String URL =
            "jdbc:mysql://"+HOST+"/"+SCHEMA+"?"+CONFIG;
    static final String USERNAME = "root";
    static final String PASSWORD = "P@ssw0rd";
    
    static Connection connection = null;
    static PreparedStatement statement = null;
    String CREATE_USER = "INSERT INTO users VALUES (null, ?, ?, ?, ?, ?, ?, ?)";
    String FIND_ALL_USERS = "SELECT * FROM users";
    String FIND_USER_BY_ID = "SELECT * FROM users WHERE id=?";
    String DELETE_USER = "DELETE FROM users WHERE id=?";
    String UPDATE_USER_PASSWORD = "UPDATE users SET password=? WHERE id=?";
    String UPDATE_USER = "UPDATE users SET first_name=?, last_name=?, username=?, password=? WHERE id=?";
    
    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }
    
    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }
    
    public User findUserById(Integer id) throws SQLException, ClassNotFoundException {
        User user = null;
        connection = getConnection();
        statement = connection.prepareStatement(FIND_USER_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            user = new User(
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getDate("dob")
            );
        }
        closeConnection(connection);
        return user;
    }
    
    public Integer deleteUser(Integer userId) throws SQLException, ClassNotFoundException {
        Integer rowsDeleted = 0;
        connection = getConnection();
        statement = connection.prepareStatement(DELETE_USER);
        statement.setInt(1, userId);
        rowsDeleted = statement.executeUpdate();
        closeConnection(connection);
        return rowsDeleted;
    }
    
    public Integer updateUser(Integer userId, User newUser) throws SQLException, ClassNotFoundException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(UPDATE_USER);
        statement.setString(1, newUser.getFirstName());
        statement.setString(2, newUser.getLastName());
        statement.setString(3, newUser.getFirstName());
        statement.setString(4, newUser.getLastName());
        statement.setInt(5, userId);
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }
    
    public List<User> findAllUsers() throws ClassNotFoundException, SQLException {
        List<User> users = new ArrayList<User>();
        connection = getConnection();
        statement = connection.prepareStatement(FIND_ALL_USERS);
        ResultSet resultSet = statement.executeQuery();
        while (resultSet.next()) {
            User user = new User(
                resultSet.getString("username"),
                resultSet.getString("password"),
                resultSet.getString("first_name"),
                resultSet.getString("last_name"),
                resultSet.getString("email"),
                resultSet.getDate("dob")
            );
            users.add(user);
        }
        closeConnection(connection);
        return users;
    }
    public Integer createUser(User user)
            throws ClassNotFoundException, SQLException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(CREATE_USER);
        statement.setString(1, user.getUsername());
        statement.setString(2, user.getPassword());
        statement.setString(3, user.getFirstName());
        statement.setString(4, user.getLastName());
        statement.setDate(5, user.getDob());
        statement.setString(6, user.getEmail());
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        UserJdbcDao dao = new UserJdbcDao();

        User rachel = new User("rrya", "Passcode", "Rachel",
            "Ray", "rray@northeastern.edu",
            new Date(2000, 01, 01), "1" );
//        User catherine = new User("Catherine", "Wood", "cathie", "bitcoinisbig", "https://ark-invest.com/");
        dao.createUser(rachel);
//        dao.createUser(thomas);
//        dao.createUser(catherine);
        List<User> users = dao.findAllUsers();
       for(User user: users) {
           System.out.println(user.getUsername());
        }
    }
}
