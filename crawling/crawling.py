
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def crawlSet(data, keyword):
    driver = webdriver.Chrome()
    url = 'https://pandarank.net/search/detail?keyword='+keyword
    driver.get(url)
    for i in range(3):
        for j in range(4):
            scratch(driver, data, 2*(i+1), j+1)
            time.sleep(0.1)
    return data

def scratch(driver, data, i, j):
    data_1 = driver.find_element(By.CSS_SELECTOR, f'#content > div.container-fluid > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child({i}) > div:nth-child({j}) > strong')
    data.append(data_1.text)
data = []
# crawlSet(data, "의사")
# print(data)
title = ['월 검색량', '상품량', '키워드 경쟁률', '실제 경쟁상품 수', '상품 평균가', 'TOP10 상품 평균가', '상품 원가분석', '평균 광고클릭비', '최근 6개월 판매량', '최근 6개월 시장규모', '가장 많이 팔려요', '가장 적게 팔려요']