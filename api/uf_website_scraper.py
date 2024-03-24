import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By


class Browser:
    browser, service = None, None

    def __init__(self):
        options = Options()
        user_agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36'
        options.add_argument(f'user-agent={user_agent}')
        s = Service(r'C:\Users\colem\Desktop\osc-hackathon\api\drivers\chromedriver.exe')
        self.browser = webdriver.Chrome(service=s, options=options)

    def find_a_tag(self):
        buttons = self.browser.find_elements(by=By.CSS_SELECTOR, value='a')
        links = []
        for button in buttons:
            links.append(button.get_attribute('href'))
        links = slice_links(links)
        return links


    def open_page(self,url:str):
        self.browser.get(url)

    def close_browser(self):
        self.browser.close()

    def click_button(self,by:By, value:str):
        button=self.browser.find_element(by=by, value=value)
        button.click()
        time.sleep(1)

def slice_links(links):
    starting_index = links.index("http://www.admissions.ufl.edu/")
    ending_index = links.index("https://yost.chem.ufl.edu/")
    links = links[starting_index:ending_index + 1]
    for link in links:
        if "a-z-website-listing" in link:
            links.remove(link)
    links = links[0:20]
    return links

def get_links():
    browser = Browser()
    browser.open_page("https://www.ufl.edu/a-z-website-listing/")
    time.sleep(2)
    links = browser.find_a_tag()
    return links

