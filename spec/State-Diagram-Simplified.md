stateDiagram-v2
    [*] --> Przygotowanie
    
    Przygotowanie --> Weryfikacja: zamkniecie_zapisow / weryfikuj_zawodnikow
    
    Weryfikacja --> Gotowy: weryfikacja_OK / generuj_harmonogram
    
    Gotowy --> WTrakcie: start_turnieju
    
    WTrakcie --> Zakończony: koniec_konkurencji / generuj_rankingi
    
    Zakończony --> [*]
    
    note right of Przygotowanie
        entry / inicjalizuj
        do / dodawaj_konkurencje
        do / zapisuj_zawodnikow
    end note
    
    note right of WTrakcie
        do / rozgrywaj_walki
        do / zapisuj_wyniki
    end note
