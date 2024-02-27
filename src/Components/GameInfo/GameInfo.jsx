import React from 'react'

function GameInfo({ setIsGameStarted}) {

    const handleClick = () => {
        setIsGameStarted(true);
        
    }

    return (
        <div>
            <h1>QUESTION APP HOSGELDİNİZ</h1>
            <h2>Nasıl Oynanır</h2>
            <ul>
                <li>Başla tuşuna bastığında 10 sorudan oluşan test başlar.</li>
                <li>İlk 10 saniye şıklar gözükmeyecektir.</li>
                <li>Her soru için 30 saniye süren bulunmaktadır.</li>
                <li>Cevap şıklarından biri tıklandıktan ya da 30sn tamamlandıktan sonra yeni soruya geçilecektir.</li>
                <li>Geçmiş sorulara dönülemeyecektir.</li>
                <li>Test sonunda doğru yanlış sonucunu görebilirsin.</li>
                <li>BAŞARILAR</li>
            </ul>
            <button id='start' type="button" onClick={handleClick}>TESTE BASLA</button>
        </div>
    )
}

export default GameInfo