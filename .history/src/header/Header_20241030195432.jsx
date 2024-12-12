import React from 'react'

const Header = () => {
  return (
    <>
      <header>
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFRUXGBgYFRcYGBoaGBsaGh0YGBoeGBoYHSggGBonHRoYITEiJSkrLi4uGh8zODMtNygtLisBCgoKDQ0NDg8PDy0ZFRkrKysrKzcrKy0rKysrKy0rKysrKy0rKysrKysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAPoAyQMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBgT/xAAxEAABAgIKAwEBAAEEAgMAAADwAAERQSExUWFxgZGhscHR4fECEpITYnKiAyJSgsL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQUE/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/APZBD6iPTYGKmTET2s13n8msulSXMN6lIYFZXNAIILCEKwGVYBqFDroZGPHpBKy7XtXPZHfzXbxyhIsQIHSVFninBChU8TQRyq7SO6N6lcXIBSjtyVcIK0vFsFLKCh00zy1xVZwK4oJZYaUpDwUzTcMVXfOi/HSr0gnlyOlKN+bmsM5I+eOtarNdQZ2oIcVJFVsNsCKgN0gRK9+5I9hXV6UGO6mVY+dXIEMOWot8o8eJvh4Uv+znV8QL4INOaFElj/W/J/5Ff6KPPxa/q/8AX+f58oDB3NZZ6PXu1aiU+N61InMvWaCOblqQ8clir2nzdLoGHSBxcqWjXSWfBiqVOdIJC262vHtah4qfjpPVt1+D2qXV5eHt9oJoRMlXxYjCZNDSPGyvJzQgkb7eVYUxJaqNiRxpIKsxQO6B984EFNQ8pAdR2AtQHYOVQpiykDQssUaol0g1B9I+XnCSfyQ9x+UKBfwqTtkgMAyQClIbFCVD2+GxQRr+ia1+fJhup6Oe1Wc0M0GSRNVzdVrvPGKh5QHK/qfz/uf/AK+Ebyuf9H/qg6RnSQp93ujZ/Kat4JEvIUozVYsFU0EhRMK1Xn4jN0Nub04PFSCOamKpCPlC/DFIoJGiWt/F6p1CsvSPmPL9KtgUfUCBhEuS8r+4qfiWVT4FySClBXczME/LFBTuo8y321yRDBAdrzpGc6uw3SJgOgU1IDPfzdAqQ43RiDa1cVJE98OgXeDqmlIB9qRoDdSwSMfOkyCBHcqsUjhkXpEegdWJ7kgerPOfKjuF9CQu26zqVjztTSgQKuKqFHwKTNGb3RbKCr+54WEEFga1GKx/7WPoyr9+h5rX+lc/+LIMyK6VciRqpELFTKd6CAYKg3SmYzLXuIOgkX2ut4vVfAg6zBiGBJadzJ0EfC3tAn3SkCBGWiPbDmwvQVvXCjRMVDi5VytBYXWI7mvcFLKChGc0NIIJEgW7MrExf4o+Nhw6ruFXaCFR6VZ3NLMNE1CpDTq+tBWiX3dKM5Eu0RigsVcyvrQSPjYomjveHME3kQoySJlb2gQ8VSJKsfe1l2KrSCrv2e7kEdgtooVdqz5ijm5ehwRQR8gzWf8ARaz/AKe1r8mbGKlFjf4+0GmzpoR3+xtijnzpRym2/VBpnpheN6U/L/abkhLLkhJTO+oigrOaZW3K+PU1lvVWBYrBhgqQGNEb3pf2hUhX2/KBQaDJad0DKk+OlH4MqUByVl+00iYQ94I7ECyqaN34LkBkOHNkZlGC6HhBYFdvtTS0fSlAIqv79x7QPcjRIzz0v7UZwHVJoHyePuCR8m9NSN60gWpEH9IDRL5I5XhHilGrJnhD2WoLnzep6wo56Q+GCP42QL+++5rUD+fakebbq9lP9b/Z/wBX8oESJcpG++vPtab9fFOsqGr83SQGhcFSRfa3IdGYC1ID51oK/utyWambaqwn0VU32JA3QHemgyUCn4q0j2jBVWgjlBpirGGQaKRyjfj7vR/JwgaauZVo4EEz3vL1QggkaZBWoxTYZSVGGmjMD/ECGBahXPG29Vn+aEUc3QZ/VNh9zVjOgvnijue+0hdX7IIDFMum3RtQoqS/s1kg0+9kDM8oVl6EY0FdMldSkbNBnQiroUyLVWzPrqOUIDAMr/LXauo5QUpBrW/yfwgO4czQqskVXqMRe2GnaMwDQQI+SztVkCnecUfu63ZBGa6Xo/SsSMPiP73wpxvVO8o7oJHqvKsoSNHyxrGRngX+8k10GyQP05qRrTPAKkdzUiq8ebeOkEd7wmqF16f15m+/aPnpjZ9QQIDIxUfKVW5uIqZWF6A3vgikCEfvaRvKMihGCvSlAK++5J/Mj5yqS+WXKQNsShAwxqZDOl+s0dg0io7oDeKaLi6KsD1up6pjhD6jZVeCCAzb52WDKwuDtZgaVwWnOztA/m7jRZ01Zahcx0pB/wDdsiqcHCP8rwN0ZgzuR2uCOCIBjCl1XNrRlHoGu0xT+eT4gd+fVdSO1HjO2qSjXhbJWGqB+iFxkjMn66tymn6Zio3QKTJIY9q/zcUFiQu5+2oMufe1p7IbYrMLlXf5HFhpoKSvUlKXfSMHUlPy7Qr3fP7NBYeai66xItXCqwoRq/XCNaaytigQkFSFVF6fzRDaF9iQ6L5oDkrSxP09D4XnaQIXun601QV+0n7PKjfnxUQTCePf3JAiV00IzFKkDHhV/wBYxQIAOt/09/8AgyyzDLH+m9u3pUab8pDDTrXtGY1teHSM9VQ8LSagRDmpAn2mkusukODVAZuLjpUlg7V+1MFaTLZBP0xAuTLm8tS7rE9pDAvsvroQMuTKq1IFN2aMVzIwmr+j6WIDtcUe1HN/WKO3QZq7kPXCCHJBWN7kWUCjZGew2JIDg9KM1z1mKkVSo0QGbDe7tHbA72UZwaOWquQxUgaBO1GGKnHUYHyvQ2MZoL4MvNCRvJGqjhPpV/XJfNBHDxktei0pWSZ4ktQIX+s0EhdyFix/Ny6M0tqQsWf6b/5bILBw+UpExGxSF2xHBNfpmgGhkkbwZC37OhGjH3igMj+1I8e1WKTWSokPFRJVzeNPeSrFZkjY9nSggW4TUOdFp2LjNHPutOKCFWZhSr8UJ36YI4W3IAXI7VhgoxtPuasEB3n3i1edagEVp9S3upSHR6QWPB9moVddZqfnm/vSlVBfRGb0VqRMWphLJCtrkY29oJG262xn2iq51iz7zT1PBUlOBeqIVxuRmAdCUjJHynM9qAz9yPUFf7v39KHN3xdf5v8A+/pBxYrMtUK8S+SsDRjdIHJogOwWbI5vdTJHY4gYpCRPVAdjYmkME/LVUStuYikcsyGCAwVlCRChMCWfWaruaWThBBHKTyrEoxJZrMbzxfWkUFbEpLVXcChll3CW6MVXFlCC/k0apGPFtlFdClIU0WqxmG6A++5tmpQHtWAcVIHEUCB66wdPzhLztekAdIBmgTzPlyjMaT7rVDai5PywcoJDAhYWp4JcIz1B3NGfgqQV7PKgPUUKxI4nKRq84FliCRNS+a7Qw0/PlcjkpzXSFz6Mg5M5SqzSwOekYB1M+CjaUUBzY5Qlf5yVZjSsxRmx0mgjMUeK4KsVY5LJlRPtad8QqQDo9o3jeFlGSX8ZI2l1F0rLkEaWpfetRnTo8ipRxzlHB8tEFd4ZY364qOVd8VKt2VSvWYUfOOkF/NvjmajNwfVT7bNGyDygP46oh0hLCPFKP4+emTzdgPkgQN6us0djVukdyVmKrlSDMA4rVgGSeHuk+26OyBmqG3SjPjtMzRnx2wy6QDg5S7wrTeGan9GFyCHNF/asGu/wZUKVz/i/b2g236qK4l6OVS8fEiGeKhoZIDlUzyqxRnbsoxnZRvNU8oDS82FaQRnL6Mo7IxV3fagrPT7xUijmVtw6r2ZVQrM0Ed7765k0oyDdHNSlMtDbNAbK3iP1Dqm9GNrMK5RUY2N0FZ9/evSR6etjOakTXWpP6KC2maCwxLulXcieFHbDgqQkZVINM70E2vIqEvNSQl0XYIz5Fe8FRHKhnV/T5aKBZgqb0KCRvKjZHYs+fVY+dTwjuGfaCMykSLHhCRZ0q7hnVmgQu4f6OuUMNl1hLKfWbrP+q5BBYlF5FV7IKQ9JApuQHfEjyQVYofpyKn5YCxRqSNsukGmYPiQusKXUZ/scJ9yWiwwmggboamKY8+aECc8UEYJ8KszXEX8Xo/dx0kTX0gRaziMixP5M7K5JqMiA2JTZQOpBwrvqRmKFX2ysorwwQNDdVjIwoUOjNHchMyVBrzxW19CDlqF2qkCCgvhmnKRwjti9d5wrA02pUZupF9CCwAsUAxUB7tLENn53mgrlZ4kkAt3ihX3rgjeArQP5keiSxRfo3lbZ2GsWv7/3NugwzMGCqHOr3I7lMJl6A7hxUlJqlQUqNZQU49oKzub8I73kIzyU0NkdzJy2tBqBQFqkCk7TJjPH6hFAd/BrgrWXuZWKO/J8UhMsQaAggGCgXV0aqNl8QWAdJ+W68ErEhgn67jCtBAjK9UPCRI95VqP05tVXQ6AdYK0dIwVSSLlU9kDzGs8IzQqoDVG+gykA+oLjYcZI/qU+Z4qPkO5yjvNBY07yPCRMcqn3SEvMjJIz4ftAj12XLX9/q19W8rDGxyr/AFh/18oIHhUd9WekqWPw9H5Jrp/5EE/LXBJVsoEVHajNmygsM5qits9tfxMb5ZLmz1/8Vp5YtwyUagQuOU1tnK/tRm4beCv5ahsERIeOqW6Vb8hkq7VZdqPVn0grsXqX5x042XP8/wD5ZdHr/wAtqkBgHRyu5pKM9eXLLP6egsQbiRLqalHKfP1dP1W3/P8APDrDVNnygtrTpx4h8tU9ek/LdrT1ZMgyWnCoEVWl/wAoZUUYLP6lh+lQaSgGC088lWrbB+WQZ/oC1SJEYoT89fjpX81s178IDsfcu1qD2frRk/Uv/rvWvp/0vzY2ig//2Q==" alt="" />
        <a href="/" className="logo"><i className="fab fa-node-js"></i> logo</a>

        <div id="menu" class="fas fa-bars"></div>
        <nav class="navbar">
            <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
</header>
    </>
  )
}

export default Header