// See https://aka.ms/new-console-template for more information
using System;
using System.Diagnostics.Metrics;

class Calculate
{
    static void Main()
    {
        char[,] board = new char[3, 3];
        StartBoard(ref board);

        Console.WriteLine("Welcome to Tic-Tac-Toe!");
        Console.WriteLine("_______________________ {0}", Environment.NewLine);

        string player1 = "";

        while (player1.Length < 2)
        {
            Console.WriteLine("Player 1. Insert your name:");
            player1 = Console.ReadLine();

            if (player1.Length < 2) Console.WriteLine("Player name must contain more than 2 digits");
        }

        string player2 = "";

        while (player2.Length < 2)
        {
            Console.WriteLine("Player 2. Insert your name:");
            player2 = Console.ReadLine();

            if (player2.Length < 2) Console.WriteLine("Player name must contain more than 2 digits");
        }

        bool turnPlayerOne = true;

        while (!IsWinner(board))
        {
            Console.Clear();
            Console.WriteLine("Welcome to Tic-Tac-Toe!");
            Console.WriteLine("_______________________ {0}", Environment.NewLine);
            Console.WriteLine(VisualBoard(board));

            string turnPlayerName = "";
            char icon = ' ';

            if (turnPlayerOne)
            {
                turnPlayerName = player1;
                icon = 'X';
            }
            else
            {
                turnPlayerName = player2;
                icon = 'O';
            }

            string coordinate = "";

            while (!IsValidCoordinate(coordinate) || IsTaken(board, coordinate))
            {
                Console.WriteLine("{0}, Type a coordinate to insert your icon", turnPlayerName);
                coordinate = Console.ReadLine();

                if (!IsValidCoordinate(coordinate)) Console.WriteLine("Invalid coordinate, type a coordinate like A1 or C3, for example {0}", Environment.NewLine);
                if (IsTaken(board, coordinate)) Console.WriteLine("Coordinate taken, type another one {0}", Environment.NewLine);
            } 

            UserInput(ref board, coordinate, icon);

            if (IsWinner(board)) break;
            if (Tie(board)) break;

            turnPlayerOne = !turnPlayerOne;
        }

        if (IsWinner(board))
        {
            Console.Clear();
            string boardUI = VisualBoard(board);
            Console.WriteLine(boardUI);
            Console.WriteLine("Finished!");
            if (Winner(board) == 'X')
            {
                Console.WriteLine("Winner: {0}", player1);
            }
            else
                Console.WriteLine("Winner: {0}", player2);
        }

        if (!IsWinner(board))
        {
            if (Tie(board))
            {
                Console.Clear();
                string boardUI = VisualBoard(board);
                Console.WriteLine(boardUI);
                Console.WriteLine("Tie!");
            }
        }
    }

    static void StartBoard(ref char[,] board)
    {
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                board[i, j] = ' ';
            }
        }
    }

    static string VisualBoard(char[,] board)
    {
        string boardUI = "";
        boardUI += "    A   B   C" + Environment.NewLine;
        boardUI += "  ┌───┬───┬───┐" + Environment.NewLine;
        boardUI += $"1 | {board[0, 0]} | {board[0, 1]} | {board[0, 2]} |" + Environment.NewLine;
        boardUI += "  ├───┼───┼───┤" + Environment.NewLine;
        boardUI += $"2 | {board[1, 0]} | {board[1, 1]} | {board[1, 2]} |" + Environment.NewLine;
        boardUI += "  ├───┼───┼───┤" + Environment.NewLine;
        boardUI += $"3 | {board[2, 0]} | {board[2, 1]} | {board[2, 2]} |" + Environment.NewLine;
        boardUI += "  └───┴───┴───┘" + Environment.NewLine;

        return boardUI;
    }

    static char Winner(char[,] board)
    {
        // Horizontal Win
        if (board[0, 0] == board[0, 1] && board[0, 1] == board[0, 2] && board[0, 0] != ' ') return board[0, 0];
        if (board[1, 0] == board[1, 1] && board[1, 1] == board[1, 2] && board[1, 0] != ' ') return board[1, 0];
        if (board[2, 0] == board[2, 1] && board[2, 1] == board[2, 2] && board[2, 0] != ' ') return board[2, 0];

        // Vertical Win
        if (board[0, 0] == board[1, 0] && board[1, 0] == board[2, 0] && board[0, 0] != ' ') return board[0, 0];
        if (board[0, 1] == board[1, 1] && board[1, 1] == board[2, 1] && board[0, 1] != ' ') return board[0, 1];
        if (board[0, 2] == board[1, 2] && board[1, 2] == board[2, 2] && board[0, 2] != ' ') return board[0, 2];

        // Diagonal Win
        if (board[0, 0] == board[1, 1] && board[1, 1] == board[2, 2] && board[0, 0] != ' ') return board[0, 0];
        if (board[0, 2] == board[1, 1] && board[1, 1] == board[2, 0] && board[0, 2] != ' ') return board[0, 2];

        return ' ';
    }

    static bool IsWinner(char[,] board)
    {
        return Winner(board) != ' ';
    }

    static bool IsTaken(char[,] board, int x, int y)
    {
        if (x < 0 || x > 2) throw new ArgumentException("x value must be in between 0 and 2", "x");
        if (y < 0 || y > 2) throw new ArgumentException("y value must be in between 0 and 2", "y");

        return board[x, y] != ' ';
    }

    static bool IsTaken(char[,] board, string coordinates)
    {
        coordinates = coordinates.Trim().ToUpper();

        switch (coordinates)
        {
            case "A1":
                return IsTaken(board, 0, 0);
            case "A2":
                return IsTaken(board, 1, 0);
            case "A3":
                return IsTaken(board, 2, 0);
            case "B1":
                return IsTaken(board, 0, 1);
            case "B2":
                return IsTaken(board, 1, 1);
            case "B3":
                return IsTaken(board, 2, 1);
            case "C1":
                return IsTaken(board, 0, 2);
            case "C2":
                return IsTaken(board, 1, 2);
            case "C3":
                return IsTaken(board, 2, 2);
        }

        return false;
    }

    static void UserInput(ref char[,] board, string coordinates, char letter)
    {
        coordinates = coordinates.Trim().ToUpper();

        switch (coordinates)
        {
            case "A1":  
                board[0, 0] = letter;
                return;
            case "A2":
                board[1, 0] = letter;
                return;
            case "A3":
                board[2, 0] = letter;
                return;
            case "B1":
                board[0, 1] = letter;
                return;
            case "B2":
                board[1, 1] = letter;
                return;
            case "B3":
                board[2, 1] = letter;
                return;
            case "C1":
                board[0, 2] = letter;
                return;
            case "C2":
                board[1, 2] = letter;
                return;
            case "C3":
                board[2, 2] = letter;
                return;
        }
    }

    static bool IsValidCoordinate(string coordinate)
    {
        switch (coordinate)
        {
            case "A1":
            case "A2":
            case "A3":
            case "B1":
            case "B2":
            case "B3":
            case "C1":
            case "C2":
            case "C3":
                return true;
            default:
                return false;
        }
    }

    static bool Tie(char[,] board)
    {
        if (board[0, 0] != ' ' && board[0, 1] != ' ' && board[0, 2] != ' ' &&
            board[1, 0] != ' ' && board[1, 1] != ' ' && board[1, 2] != ' ' &&
            board[2, 0] != ' ' && board[2, 1] != ' ' && board[2, 2] != ' ')
        {
            return true;
        }

        return false;
    }
}