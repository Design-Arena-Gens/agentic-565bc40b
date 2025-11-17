'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Obrigado por se inscrever, ${email}!`)
    setEmail('')
  }

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <nav className={styles.nav}>
          <div className={styles.logo}>MICKEY MOUSE</div>
          <ul className={styles.navLinks}>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#history">História</a></li>
            <li><a href="#gallery">Galeria</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>

        <div className={styles.heroContent}>
          <div className={styles.mickeyIcon}>
            <div className={styles.mickeyHead}>
              <div className={styles.mickeyEarLeft}></div>
              <div className={styles.mickeyEarRight}></div>
              <div className={styles.mickeyFace}>
                <div className={styles.mickeyEyes}>
                  <div className={styles.mickeyEye}></div>
                  <div className={styles.mickeyEye}></div>
                </div>
                <div className={styles.mickeyNose}></div>
                <div className={styles.mickeyMouth}></div>
              </div>
            </div>
          </div>
          <h1 className={styles.heroTitle}>
            A Magia do <span className={styles.highlight}>Mickey Mouse</span>
          </h1>
          <p className={styles.heroSubtitle}>
            O personagem mais icônico da Disney desde 1928
          </p>
          <button className={styles.ctaButton}>Descubra a Magia</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sobre o Mickey</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                Mickey Mouse é um dos personagens de desenho animado mais reconhecíveis do mundo.
                Criado por Walt Disney e Ub Iwerks em 1928, Mickey se tornou o símbolo oficial
                da The Walt Disney Company.
              </p>
              <p>
                Com sua personalidade alegre, otimista e aventureira, Mickey conquistou o coração
                de milhões de pessoas ao redor do mundo, tornando-se um verdadeiro ícone cultural.
              </p>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <h3>1928</h3>
                <p>Ano de Criação</p>
              </div>
              <div className={styles.stat}>
                <h3>95+</h3>
                <p>Anos de História</p>
              </div>
              <div className={styles.stat}>
                <h3>∞</h3>
                <p>Fãs no Mundo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className={styles.history}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Linha do Tempo</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1928</div>
              <div className={styles.timelineContent}>
                <h3>Steamboat Willie</h3>
                <p>Primeiro desenho animado com som sincronizado do Mickey</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1940</div>
              <div className={styles.timelineContent}>
                <h3>Fantasia</h3>
                <p>Mickey estrela como aprendiz de feiticeiro</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1955</div>
              <div className={styles.timelineContent}>
                <h3>Disneyland</h3>
                <p>Abertura do primeiro parque temático Disney</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2024</div>
              <div className={styles.timelineContent}>
                <h3>Legado Eterno</h3>
                <p>Mickey continua inspirando novas gerações</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={styles.gallery}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Galeria</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem} style={{background: 'linear-gradient(135deg, #E4003A, #FF6B6B)'}}>
              <div className={styles.galleryIcon}>🎬</div>
              <h3>Filmes</h3>
            </div>
            <div className={styles.galleryItem} style={{background: 'linear-gradient(135deg, #FFCC00, #FFE066)'}}>
              <div className={styles.galleryIcon}>📺</div>
              <h3>Séries</h3>
            </div>
            <div className={styles.galleryItem} style={{background: 'linear-gradient(135deg, #4ECDC4, #44A08D)'}}>
              <div className={styles.galleryIcon}>🎮</div>
              <h3>Jogos</h3>
            </div>
            <div className={styles.galleryItem} style={{background: 'linear-gradient(135deg, #9B59B6, #8E44AD)'}}>
              <div className={styles.galleryIcon}>🎪</div>
              <h3>Parques</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Fique por Dentro</h2>
          <p className={styles.contactSubtitle}>
            Inscreva-se para receber novidades sobre o Mickey Mouse
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Inscrever-se
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2024 Mickey Mouse Landing Page. Projeto demonstrativo.</p>
          <p>Mickey Mouse é propriedade da The Walt Disney Company.</p>
        </div>
      </footer>
    </main>
  )
}
