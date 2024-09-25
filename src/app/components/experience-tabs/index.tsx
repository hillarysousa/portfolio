'use client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './style.scss';

export default function ExperienceTabs() {
    return (
        <Tabs className="tabs" selectedTabClassName="tabs__tab-selected" >
            <TabList className="tabs__list">
                <Tab className="tabs__tab">Nomad</Tab>
                <Tab className="tabs__tab">Nubank</Tab>
                <Tab className="tabs__tab">Americanas s.a.</Tab>
            </TabList>

            <TabPanel className="tabs__tabpanel">
                <h3 className='tabs__tabpanel__title'>Desenvolvedora front-end sênior @ Nomad</h3>
                <p className='tabs__tabpanel__period'>abril de 2023 - agosto de 2024</p>
                <div className='tabs__tabpanel__content'>
                    <ul>
                        <li>Atuação como OWASP Security Champion, promovendo e liderando práticas de segurança dentro da equipe de desenvolvimento do Backoffice</li>
                        <li>Atuação como intermediária entre os times de produto e Backoffice, facilitando a comunicação, refinando e priorizando tarefas com requisitos claramente definidos, promovendo uma execução eficiente e intercâmbio de feedbacks para melhoria contínua e colaboração.</li>
                        <li>Desenvolvimento de funcionalidades para a área de Backoffice da Nomad, visando ampliar o suporte às operações executadas via aplicativo</li>
                        <li>Desenvolvimento de funcionalidades para o site da Nomad, com o intuito de incrementar o tráfego orgânico e aumentar volume de acessos no aplicativo</li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel className="tabs__tabpanel">
                <h3 className='tabs__tabpanel__title'>Engenheira de software sênior @ Nubank</h3>
                <p className='tabs__tabpanel__period'>fevereiro de 2022 - fevereiro de 2023</p>
                <div className='tabs__tabpanel__content'>
                    <ul>
                        <li>Lead do projeto de experiência de resgate do Tesouro Direto no aplicativo do Nubank</li>
                        <li>Lead do projeto de experiência para o título RendA+ do Tesouro Direto no aplicativo do Nubank</li>
                        <li>Atuação na frente para migração de código em Flutter para Clojure seguindo princípios de BDC (Back-end Driven Content)</li>
                        <li>Desenvolvimento de páginas e componentes em Clojure e Flutter para a área de Fundos de Investimento do aplicativo do Nubank</li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel className="tabs__tabpanel">
                <h3 className='tabs__tabpanel__title'>Desenvolvedora front-end sênior @ Americanas s.a.</h3>
                <p className='tabs__tabpanel__period'>maio de 2019 - dezembro de 2021</p>
                <div className='tabs__tabpanel__content'>
                    <ul>
                        <li>Referência técnica do time responsável pelo fluxo O2O (Online to Offline) da Americanas.com</li>
                        <li>Referência técnica para a equipe responsável pelo fluxo de navegação dos sites Americanas.com, Submarino.com e Shoptime.com</li>
                        <li>Desenvolvimento de componentes e experiências para as páginas de navegação dos sites Americanas.com, Submarino.com e Shoptime.com</li>
                        <li>Desenvolvimento de componentes React no projeto da página de produto da Americanas.com</li>
                    </ul>
                </div>
            </TabPanel>

        </Tabs>
    )
}