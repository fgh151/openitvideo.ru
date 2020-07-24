import React from "react"
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default function Contribute() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Добавить видео</title>
            </Helmet>
            <div>
                <ol>
                    <li>Склонировать репозиторий https://github.com/fgh151/openitvideo.ru</li>
                    <li>Добавить в папку /src/data/videos json файл. Пример файла
                    <pre>
                        {{
                            "title": "Теория и практика использования ClickHouse в реальных приложениях. Александр Зайцев (2018г)",
                            "id": "9MwKE30aUPs",
                            "url": "https://youtu.be/9MwKE30aUPs",
                            "tags": ["sql", "clickhouse"]
                        }}
                    </pre>
                    </li>
                    <li>Создать Pull Request</li>
                </ol>
            </div>
        </Layout>
    )
}
