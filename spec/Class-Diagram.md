classDiagram
    class Uzytkownik {
        -int id
        -string login
        -string rola
        +zaloguj()
    }

    class Zawodnik {
        -int wiek
        -float waga
        -string plec
    }

    class Turniej {
        -string nazwa
        -Date data
    }

    class Konkurencja {
        -string typ
        -string kategoria
        -Date godzina
        -int numerMaty
    }

    class Wynik {
        -float punkty
        -int pozycja
    }

    class Mata {
        -int numer
    }

    Turniej "1" -- "*" Konkurencja
    Turniej "1" -- "*" Mata
    Zawodnik "*" -- "*" Konkurencja
    Konkurencja "1" -- "*" Wynik
    Konkurencja "*" -- "1" Mata
    Zawodnik "1" -- "*" Wynik
    Uzytkownik "1" -- "*" Zawodnik
