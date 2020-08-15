import React from "react";
import HistoryItem from "./HistoryItem";

export default function History({ transactions, delTransaction }) {
  return (
    <section className="history">
      <h3>История расходов</h3>
      <ul className="history__list">
        {transactions.map(item => 
                      <HistoryItem 
                          key={item.id} 
                          transaction={item}
                          delTransaction={delTransaction}
                      />)}
        
      </ul>
    </section>
  );
}


/*
<li className="history__item  history__item-minus">
          Отдал долг
          <span className="history__money">-10000 ₽</span>
          <button className="history__delete">x</button>
        </li>
*/