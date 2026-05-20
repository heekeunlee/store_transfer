const qaItems = [
  {
    question: "권리금과 보증금은 무엇이 다른가요?",
    answer: [
      "권리금은 기존 점포가 쌓아 둔 영업상 가치에 대해 신규 임차인이 기존 임차인에게 지급하는 금액입니다. 상권, 단골, 시설, 영업 노하우, 위치 프리미엄 등이 포함될 수 있습니다.",
      "보증금은 임대차계약에서 임차인이 임대인에게 맡기는 담보 성격의 금액입니다. 계약 종료 시 미납 차임, 원상복구비, 손해배상금 등을 정산한 뒤 반환받는 구조입니다.",
      "핵심 차이는 반환 가능성입니다. 보증금은 정산 후 반환 대상이고, 권리금은 통상 기존 임차인에게 지급하는 대가라 반환을 전제로 하지 않습니다."
    ]
  },
  {
    question: "점포를 넘겨받을 때 총비용은 어떻게 계산하나요?",
    answer: [
      "기본 산식은 총비용 = 권리금 + 임대차 보증금 + 선지급 차임 + 중개보수 + 시설 인수 및 보수 비용 + 인허가·간판·집기 이전 비용 + 예비 운영자금입니다.",
      "예를 들어 권리금 3,000만 원, 보증금 2,000만 원, 첫 달 월세 200만 원, 중개보수와 기타 준비금 500만 원이라면 초기 현금 필요액은 약 5,700만 원입니다.",
      "단, 보증금은 장래 반환 가능 자산이고 권리금과 보수 비용은 회수 불확실성이 크므로 같은 총액 안에서도 성격을 나눠 관리해야 합니다."
    ]
  },
  {
    question: "권리금은 누구에게 지급하나요?",
    answer: [
      "권리금은 보통 기존 임차인에게 지급합니다. 임대인에게 지급하는 보증금이나 월세와는 별도의 거래입니다.",
      "실무에서는 권리금계약과 임대차계약이 함께 진행되지만 계약 당사자가 다를 수 있으므로, 지급 대상과 지급 조건을 계약서에 분리해서 써야 합니다."
    ]
  },
  {
    question: "보증금은 언제 돌려받을 수 있나요?",
    answer: [
      "보증금은 임대차 종료 후 점포를 반환하고 미납 월세, 관리비, 원상복구비 등 정산이 끝난 뒤 반환받는 것이 일반적입니다.",
      "계약서에 반환 시점, 정산 항목, 원상복구 범위를 명확히 적어 두면 분쟁 가능성을 줄일 수 있습니다."
    ]
  },
  {
    question: "권리금을 지급할 때 가장 주의해야 할 점은 무엇인가요?",
    answer: [
      "권리금은 영업 가치에 대한 대가이므로 실제 매출, 임대차 승계 가능성, 시설 상태, 인허가 승계 여부, 상권 변화 가능성을 확인해야 합니다.",
      "임대인이 신규 임차인과의 임대차계약 체결을 거절하면 권리금 거래 자체가 흔들릴 수 있으므로, 임대차 조건 확정 전 큰 금액을 먼저 지급하지 않는 편이 안전합니다."
    ]
  },
  {
    question: "시설권리금과 영업권리금은 어떻게 구분하나요?",
    answer: [
      "시설권리금은 인테리어, 주방 설비, 냉난방기, 집기 등 유형 자산을 넘겨받는 대가입니다. 감가상각과 수리 필요성을 반영해야 합니다.",
      "영업권리금은 단골, 매출 흐름, 입지, 상호 인지도처럼 눈에 보이지 않는 영업상 이익에 대한 대가입니다. 매출 자료와 실제 영업 지속 가능성 검토가 중요합니다."
    ]
  },
  {
    question: "권리금이 높아 보일 때 검토할 기준은 무엇인가요?",
    answer: [
      "월평균 순이익 대비 회수 기간을 계산합니다. 권리금 3,000만 원이고 월 순이익이 300만 원이라면 단순 회수 기간은 10개월입니다.",
      "회수 기간이 길수록 임대차 기간, 업종 리스크, 시설 교체 비용, 주변 경쟁 점포 증가 가능성을 더 보수적으로 봐야 합니다."
    ]
  },
  {
    question: "월세와 보증금 조건은 총비용 판단에 어떻게 반영하나요?",
    answer: [
      "월세가 높으면 매월 손익분기점이 올라가고, 보증금이 높으면 초기 자금 부담이 커집니다. 권리금만 보고 판단하면 실제 운영 부담을 놓치기 쉽습니다.",
      "총비용표에는 반환 가능 보증금, 회수 불확실 권리금, 매월 고정비인 월세를 각각 다른 칸으로 나눠 적는 것이 좋습니다."
    ]
  },
  {
    question: "권리금계약서에는 어떤 내용을 넣어야 하나요?",
    answer: [
      "권리금 금액, 지급 일정, 잔금 지급 조건, 인수 대상 시설 목록, 재고 포함 여부, 임대차계약 불성립 시 처리 방식, 하자 발견 시 책임, 영업자료 확인 내역을 넣어야 합니다.",
      "특히 ‘임대차계약이 체결되지 않으면 권리금계약을 해제하고 지급액을 반환한다’는 조건을 명확히 두면 위험을 줄일 수 있습니다."
    ]
  },
  {
    question: "A4로 인쇄할 때 어떤 식으로 보면 좋나요?",
    answer: [
      "첫 페이지에서는 기록 개요와 질문 목록을 보고, 이후 각 질문을 독립된 블록으로 읽도록 구성했습니다.",
      "브라우저 인쇄에서 용지는 A4, 방향은 세로, 배경 그래픽 인쇄를 켜면 화면과 유사한 품질로 PDF 저장이 가능합니다."
    ]
  }
];

const qaList = document.querySelector("#qaList");
const tocList = document.querySelector("#tocList");

qaItems.forEach((item, index) => {
  const id = `q${index + 1}`;
  const tocItem = document.createElement("li");
  tocItem.innerHTML = `<a href="#${id}">${item.question}</a>`;
  tocList.append(tocItem);

  const article = document.createElement("article");
  article.className = "qa-card";
  article.id = id;
  article.innerHTML = `
    <details open>
      <summary>
        <span class="number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${item.question}</h3>
      </summary>
      <div class="answer">
        ${item.answer.map((text) => `<p>${text}</p>`).join("")}
      </div>
    </details>
  `;
  qaList.append(article);
});

document.querySelector("#printPage").addEventListener("click", () => window.print());
document.querySelector("#expandAll").addEventListener("click", () => {
  document.querySelectorAll("details").forEach((detail) => {
    detail.open = true;
  });
});
document.querySelector("#collapseAll").addEventListener("click", () => {
  document.querySelectorAll("details").forEach((detail) => {
    detail.open = false;
  });
});
