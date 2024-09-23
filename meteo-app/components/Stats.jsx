import React from 'react'

function Stats() {
    return (
        <section className='stats-container'>
            <p className='stats-container-title'>Statistiques</p>
            <div className='stats-container-content'>
                <div className='stats-container-content-item'>
                    <p>Qualité de l'air</p>
                    <div className='stats-container-content-item-icon-air'>
                        <p>Bonne</p>
                    </div>
                </div>
                <div className='stats-container-content-item'>
                    <p>Pression</p>
                    <div className='stats-container-content-item-icon-pressure'>
                        <p>1023 hPa</p>
                    </div>

                </div>
                <div className='stats-container-content-item'>
                    <p>Humidité</p>
                    <div className='stats-container-content-item-icon-humidity'>
                        <p>45%</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats